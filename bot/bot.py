"""
ВайбКод — Telegram-бот
Функции:
  - Получает заявки с сайта (через FastAPI /api/contact)
  - Отвечает клиентам: /start, FAQ, мини-форма заявки, цены
"""

import asyncio
import logging
import os
from contextlib import asynccontextmanager

from aiogram import Bot, Dispatcher, F
from aiogram.filters import CommandStart, Command
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.types import (
    Message,
    CallbackQuery,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
)
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

load_dotenv()

BOT_TOKEN: str = os.getenv("BOT_TOKEN", "")
ADMIN_CHAT_ID: int = int(os.getenv("ADMIN_CHAT_ID", "0"))
PORT: int = int(os.getenv("PORT", "8000"))

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)

# ──────────────────────────────────────────────
# Bot & Dispatcher
# ──────────────────────────────────────────────

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(storage=MemoryStorage())


# ──────────────────────────────────────────────
# FSM — форма заявки прямо в боте
# ──────────────────────────────────────────────

class OrderForm(StatesGroup):
    name    = State()
    contact = State()
    service = State()
    comment = State()


# ──────────────────────────────────────────────
# Клавиатуры
# ──────────────────────────────────────────────

def main_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="📝 Оставить заявку", callback_data="order")],
        [InlineKeyboardButton(text="💰 Цены",            callback_data="prices")],
        [InlineKeyboardButton(text="❓ FAQ",             callback_data="faq")],
        [InlineKeyboardButton(text="👥 О нас",           callback_data="about")],
    ])


def service_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="📄 Лендинг / сайт-визитка", callback_data="svc_landing")],
        [InlineKeyboardButton(text="🤖 Telegram-бот",           callback_data="svc_bot")],
        [InlineKeyboardButton(text="🤷 Ещё не определился",     callback_data="svc_other")],
    ])


def back_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="← Главное меню", callback_data="menu")],
    ])


# ──────────────────────────────────────────────
# Тексты
# ──────────────────────────────────────────────

WELCOME = (
    "👋 Привет! Это бот агентства <b>ВайбКод</b>.\n\n"
    "Мы делаем сайты и Telegram-боты под ключ — быстро, по-честному и с договором.\n\n"
    "Выбери, что тебя интересует 👇"
)

PRICES_TEXT = (
    "💰 <b>Наши цены</b>\n\n"
    "📄 <b>Лендинг / сайт-визитка</b>\n"
    "от 3 000 ₽ · срок от 1 дня\n\n"
    "🤖 <b>Telegram-бот</b>\n"
    "от 5 000 ₽ · срок от 2 дней\n\n"
    "🛍 <b>Интернет-магазин</b>\n"
    "Скоро — принимаем заявки в лист ожидания\n\n"
    "В стоимость включено: договор, до 5 правок, "
    "политика конфиденциальности, SEO-базовые настройки, помощь с деплоем."
)

FAQ_TEXT = (
    "❓ <b>Частые вопросы</b>\n\n"
    "<b>Что такое вайбкодинг?</b>\n"
    "AI-assisted разработка: ИИ ускоряет написание кода, "
    "два живых разработчика проверяют каждую строку. "
    "Результат — быстро и качественно.\n\n"
    "<b>Можно ли потом развивать сайт без вас?</b>\n"
    "Да. Код структурирован и задокументирован — "
    "его сможет поддержать любой разработчик или AI-инструмент.\n\n"
    "<b>Как проходит оплата?</b>\n"
    "По договору. Предоплата 50%, остаток после сдачи.\n\n"
    "<b>Работаете официально?</b>\n"
    "Да, с договором и гарантиями. ФЗ-152, cookie-баннер "
    "и политика конфиденциальности включены.\n\n"
    "<b>Как с вами связаться?</b>\n"
    "Прямо здесь в боте, или на сайте vibecodesite.ru"
)

ABOUT_TEXT = (
    "👥 <b>О нас</b>\n\n"
    "Нас двое — оба работаем в крупной российской IT-компании.\n\n"
    "👩‍💻 <b>Дарья</b> — Frontend-разработчик\n"
    "React, TypeScript, CSS, UI/UX\n\n"
    "👨‍💻 <b>Олег</b> — Backend-разработчик\n"
    "Python, FastAPI, PostgreSQL, Telegram-боты\n\n"
    "Корпоративный уровень кода — по стартовой цене."
)


# ──────────────────────────────────────────────
# Handlers — команды
# ──────────────────────────────────────────────

@dp.message(CommandStart())
async def cmd_start(message: Message, state: FSMContext) -> None:
    await state.clear()
    await message.answer(WELCOME, reply_markup=main_menu(), parse_mode="HTML")


@dp.message(Command("menu"))
async def cmd_menu(message: Message, state: FSMContext) -> None:
    await state.clear()
    await message.answer("Главное меню:", reply_markup=main_menu())


# ──────────────────────────────────────────────
# Handlers — callback кнопки
# ──────────────────────────────────────────────

@dp.callback_query(F.data == "menu")
async def cb_menu(call: CallbackQuery, state: FSMContext) -> None:
    await state.clear()
    await call.message.edit_text(WELCOME, reply_markup=main_menu(), parse_mode="HTML")


@dp.callback_query(F.data == "prices")
async def cb_prices(call: CallbackQuery) -> None:
    await call.message.edit_text(PRICES_TEXT, reply_markup=back_menu(), parse_mode="HTML")


@dp.callback_query(F.data == "faq")
async def cb_faq(call: CallbackQuery) -> None:
    await call.message.edit_text(FAQ_TEXT, reply_markup=back_menu(), parse_mode="HTML")


@dp.callback_query(F.data == "about")
async def cb_about(call: CallbackQuery) -> None:
    await call.message.edit_text(ABOUT_TEXT, reply_markup=back_menu(), parse_mode="HTML")


# ──────────────────────────────────────────────
# FSM — оформление заявки
# ──────────────────────────────────────────────

@dp.callback_query(F.data == "order")
async def cb_order_start(call: CallbackQuery, state: FSMContext) -> None:
    await state.set_state(OrderForm.name)
    await call.message.edit_text(
        "📝 <b>Оставить заявку</b>\n\nШаг 1 из 4\n\nКак вас зовут?",
        parse_mode="HTML",
    )


@dp.message(OrderForm.name)
async def order_name(message: Message, state: FSMContext) -> None:
    await state.update_data(name=message.text)
    await state.set_state(OrderForm.contact)
    await message.answer("Шаг 2 из 4\n\nКак с вами связаться?\nТелефон или @username в Telegram:")


@dp.message(OrderForm.contact)
async def order_contact(message: Message, state: FSMContext) -> None:
    await state.update_data(contact=message.text)
    await state.set_state(OrderForm.service)
    await message.answer("Шаг 3 из 4\n\nЧто нужно сделать?", reply_markup=service_menu())


@dp.callback_query(F.data.startswith("svc_"), OrderForm.service)
async def order_service(call: CallbackQuery, state: FSMContext) -> None:
    service_map = {
        "svc_landing": "Лендинг / сайт-визитка",
        "svc_bot":     "Telegram-бот",
        "svc_other":   "Ещё не определился",
    }
    await state.update_data(service=service_map.get(call.data, "—"))
    await state.set_state(OrderForm.comment)
    await call.message.edit_text(
        "Шаг 4 из 4\n\nРасскажите в двух словах о задаче\n(или напишите «—» если пока нечего добавить):"
    )


@dp.message(OrderForm.comment)
async def order_comment(message: Message, state: FSMContext) -> None:
    data = await state.get_data()
    await state.clear()

    summary = (
        f"📥 <b>Новая заявка из бота</b>\n\n"
        f"👤 Имя: {data['name']}\n"
        f"📞 Контакт: {data['contact']}\n"
        f"🛠 Услуга: {data['service']}\n"
        f"💬 Задача: {message.text}"
    )

    # Уведомляем администратора
    await bot.send_message(ADMIN_CHAT_ID, summary, parse_mode="HTML")

    await message.answer(
        "✅ <b>Заявка принята!</b>\n\n"
        "Свяжемся с вами в течение нескольких часов.\n\n"
        "Пока можете посмотреть наши цены или FAQ:",
        reply_markup=main_menu(),
        parse_mode="HTML",
    )


# ──────────────────────────────────────────────
# FastAPI — endpoint для формы на сайте
# ──────────────────────────────────────────────

class ContactFormData(BaseModel):
    name:    str
    contact: str
    service: str = ""
    message: str = ""


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Запускаем бота при старте сервера
    asyncio.create_task(dp.start_polling(bot, handle_signals=False))
    yield
    await bot.session.close()


api = FastAPI(lifespan=lifespan)


@api.post("/api/contact")
async def contact_form(data: ContactFormData):
    """Принимает заявку с сайта и отправляет уведомление в Telegram."""
    text = (
        f"📥 <b>Новая заявка с сайта</b>\n\n"
        f"👤 Имя: {data.name}\n"
        f"📞 Контакт: {data.contact}\n"
        f"🛠 Услуга: {data.service or '—'}\n"
        f"💬 Сообщение: {data.message or '—'}"
    )
    await bot.send_message(ADMIN_CHAT_ID, text, parse_mode="HTML")
    return {"ok": True}


# ──────────────────────────────────────────────
# Запуск
# ──────────────────────────────────────────────

if __name__ == "__main__":
    uvicorn.run(api, host="0.0.0.0", port=PORT)
