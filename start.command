#!/bin/bash
cd "$(dirname "$0")"
echo "==============================="
echo "  ВайбКод — запуск проекта"
echo "==============================="

# Проверяем Node.js
if ! command -v node &> /dev/null; then
  echo ""
  echo "❌ Node.js не установлен!"
  echo "Скачайте с https://nodejs.org и запустите этот скрипт снова."
  read -p "Нажмите Enter для выхода..."
  exit 1
fi

echo "✓ Node.js $(node --version)"

# Устанавливаем зависимости если нет node_modules
if [ ! -d "node_modules" ]; then
  echo ""
  echo "📦 Устанавливаю зависимости (первый раз ~30 сек)..."
  npm install
fi

echo ""
echo "🚀 Запускаю сервер..."
echo "Сайт откроется на http://localhost:5173"
echo ""
npm run dev
