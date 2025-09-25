# 🚀 UberBanking - Project Rules & Workflow

> Правила безшовного продолжения разработки между чатами

---

## 🚀 ЧТО УМЕЕТ CLAUDE В ЭТОМ ПРОЕКТЕ

### ✅ Полный доступ:
- **💻 Консоль** - выполнение команд, npm install, npm run build
- **💾 Git** - commit, push, история, ветки
- **☁️ Railway** - мониторинг деплоев, логи, статус

### 🔧 Весь CI/CD цикл:
```
Код → Build → Test → Commit → Push → Monitor → Fix → Re-deploy
```

### 💁 Ты НЕ делаешь:
- ❌ Commits
- ❌ Push в GitHub  
- ❌ Проверку Railway логов
- ❌ Исправление ошибок билда

**Claude делает всё и сообщает результат!** ✅

---

## ⚠️ КРИТИЧЕСКИ ВАЖНО: Философия работы

**Это совместная работа, а не автономная разработка!**

### 🎯 Главный принцип: ДИАЛОГ И СОТРУДНИЧЕСТВО

1. **Обсуждение перед действием** - предложить план, обсудить, дождаться одобрения
2. **Маленькие шаги с проверкой** - делать по чуть-чуть, показывать, ждать обратной связи
3. **Постоянная обратная связь** - проверка на каждом этапе
4. **Ты принимаешь решения** - ты владелец проекта
5. **Никакой спешки** - качество важнее скорости

**Подробнее:** См. `COLLABORATION.md`

---

## 📋 ВАЖНО: Команда продолжения

### Для начала новой сессии используй:

```
Продолжаем разработку UberBanking.

Статус: [прочитай PROGRESS.md]
Задача: [прочитай ROADMAP.md - текущая сессия]

Начинай работу с текущего этапа без объяснений.
```

---

## 🤖 Возможности Claude в этом проекте

### ✅ Полный доступ к инструментам:

#### 1. **Консоль (Terminal)**
- Выполнение команд через `osascript`
- Установка пакетов (`npm install`)
- Запуск билдов (`npm run build`)
- Проверка статуса проекта

#### 2. **Git (Version Control)**
- Доступ к GitHub через коннектор
- `git add`, `git commit`, `git push`
- Проверка истории коммитов
- Чтение и обновление веток

#### 3. **Railway (CI/CD)**
- Мониторинг деплоев
- Чтение логов билда
- Проверка статуса deployment
- Отслеживание ошибок

### 🔧 CI/CD Process - Claude отвечает за:

1. **Build & Test**
   - Запуск `npm run build` локально
   - Проверка TypeScript ошибок
   - Выявление проблем до push

2. **Git Operations**
   - Автоматический `git add .`
   - Создание осмысленных commit messages
   - Push в GitHub (`git push origin main`)

3. **Deploy Monitoring**
   - Отслеживание Railway автодеплоя
   - Чтение логов при ошибках
   - Проверка live URL после деплоя

4. **Error Handling**
   - Анализ ошибок билда на Railway
   - Исправление проблем локально
   - Повторный commit и push
   - Документирование в session logs

### ⚠️ Важно:

**Claude выполняет весь цикл CI/CD:**
```
Код → Build → Test → Commit → Push → Monitor Railway → Fix Errors → Re-deploy
```

**Ты не должен вручную:**
- Делать commits
- Push в GitHub
- Проверять Railway логи
- Исправлять ошибки билда

**Claude делает всё сам и информирует тебя о результатах!**

---

## 🎯 Основные правила проекта

### 1. **Структура работы**
- ✅ Каждая сессия = 1 завершенный этап
- ✅ Каждый этап = рабочий результат
- ✅ После каждого этапа = commit + push в GitHub
- ✅ Railway автоматически задеплоит изменения

### 2. **Git Workflow** (выполняет Claude)

```bash
# Claude автоматически после каждого этапа:
git add .
git commit -m "feat(session-X): [описание]"
git push origin main

# Railway автоматически задеплоит
# Claude мониторит и исправляет ошибки
```

### 3. **Обязательная документация**

После КАЖДОГО этапа обновлять:
- ✅ `PROGRESS.md` - отметить выполненное
- ✅ `CHANGELOG.md` - что добавлено/изменено
- ✅ `docs/session-logs/session-X.md` - лог сессии

### 4. **Проверка работоспособности** (Claude делает автоматически)

Перед push Claude проверяет:
- ✅ `npm run build` - успешная сборка
- ✅ `npm run dev` - локально работает
- ✅ Нет TypeScript ошибок
- ✅ Нет console errors

---

## 📁 Структура файлов прогресса

```
/ubb
├── PROGRESS.md           # Текущий прогресс (главный файл)
├── ROADMAP.md           # План с сессиями
├── CHANGELOG.md         # История изменений
├── docs/
│   ├── session-logs/
│   │   ├── session-1.md  # Лог сессии 1
│   │   ├── session-2.md  # Лог сессии 2
│   │   └── ...
│   ├── issues/          # Найденные проблемы
│   │   └── YYYY-MM-DD-issue-name.md
│   └── decisions/       # Технические решения
│       └── YYYY-MM-DD-decision-name.md
```

---

## 🔄 Workflow между чатами

### Последовательность действий:

#### **В конце текущего чата:**

1. Обновить `PROGRESS.md`:
   ```markdown
   ## ✅ Сессия X завершена
   - Дата: YYYY-MM-DD
   - Выполнено: [список]
   - Следующий шаг: [описание]
   ```

2. Создать лог сессии в `docs/session-logs/session-X.md`

3. Commit + Push:
   ```bash
   git add .
   git commit -m "feat(session-X): [что сделано]"
   git push origin main
   ```

4. Проверить деплой в Railway

#### **В начале нового чата:**

1. Claude читает `PROGRESS.md` → понимает где остановились
2. Claude читает `ROADMAP.md` → видит текущую задачу
3. Claude читает последний `docs/session-logs/session-X.md` → понимает контекст
4. **Сразу начинает работу** без лишних вопросов

---

## 📊 Формат PROGRESS.md

```markdown
# 📈 UberBanking - Progress Tracker

**Последнее обновление:** YYYY-MM-DD HH:MM
**Текущая сессия:** X
**Статус:** In Progress / Completed

---

## 🎯 Текущая задача
[Описание текущей задачи из ROADMAP]

## ✅ Выполнено

### Сессия 1: Project Setup
- [x] Инициализация проекта
- [x] Настройка Tailwind
- [x] Установка shadcn/ui
- [x] Базовые компоненты

### Сессия 2: Module 0 - Hero Section
- [x] Компонент Hero
- [x] Navbar
- [x] Footer
- [ ] Bank Cards (в процессе)

## 🚧 В процессе
- [ ] Текущая подзадача 1
- [ ] Текущая подзадача 2

## 📝 Следующие шаги
1. [Следующая задача из ROADMAP]
2. [Еще задача]

## ⚠️ Проблемы и заметки
- [Если есть проблемы или важные заметки]

## 🔗 Ссылки
- GitHub: https://github.com/digitalcluster25/uberbanking
- Railway: https://uberbanking-production.up.railway.app
- Railway Project ID: d93f6b89-f4bb-4e77-a3af-bae744678dd6
```

---

## 📝 Формат Session Log

Файл: `docs/session-logs/session-X.md`

```markdown
# Session X Log

**Дата:** YYYY-MM-DD
**Время:** HH:MM - HH:MM
**Тема:** [Название этапа]

---

## 🎯 Цель сессии
[Что планировалось сделать]

## ✅ Выполнено
1. [Задача 1]
   - Детали реализации
   - Файлы: `src/...`
   
2. [Задача 2]
   - Детали
   - Файлы: `src/...`

## 🐛 Баги исправлены
- [Описание бага] → [Как исправили]

## 🔧 Технические решения
- [Решение 1]: Почему выбрали X вместо Y
- [Решение 2]: ...

## 📦 Установленные пакеты
```bash
npm install [packages]
```

## 🔗 Коммиты
- `abc1234` - feat: добавлен компонент X
- `def5678` - fix: исправлена ошибка Y

## 📊 Результат
- ✅ Build успешен
- ✅ Задеплоено в Railway
- ✅ URL: [ссылка]

## 📝 Заметки для следующей сессии
- [Важная информация для продолжения]
- [Что нужно учесть]

## ⏭️ Следующий шаг
[Точное описание следующей задачи из ROADMAP]
```

---

## 🔐 GitHub + Railway Integration

### Настройка (один раз):

1. **Railway подключен к GitHub:**
   - Repo: `digitalcluster25/uberbanking`
   - Branch: `main`
   - Auto-deploy: ✅ Enabled

2. **Environment Variables в Railway:**
   ```
   NODE_ENV=production
   VITE_API_URL=https://api.uberbanking.com
   ```

3. **Build Settings:**
   ```
   Build Command: npm run build
   Start Command: npm run preview
   ```

### Auto-deploy workflow:

```
Local changes → Git push → GitHub → Railway Auto Deploy → Live URL
```

---

## ✅ Чеклист перед завершением сессии

### Pre-commit checklist:

- [ ] Код работает локально (`npm run dev`)
- [ ] Сборка успешна (`npm run build`)
- [ ] Нет TypeScript ошибок
- [ ] Нет ESLint warnings
- [ ] Обновлен `PROGRESS.md`
- [ ] Создан `docs/session-logs/session-X.md`
- [ ] Обновлен `CHANGELOG.md`

### Commit & Push:

```bash
# 1. Проверка статуса
git status

# 2. Добавить все изменения
git add .

# 3. Коммит с описанием
git commit -m "feat(session-X): [краткое описание]

- Добавлено: [что добавлено]
- Исправлено: [что исправлено]
- Изменено: [что изменено]

Session X completed ✅"

# 4. Push в main
git push origin main

# 5. Проверить деплой
# Railway автоматически задеплоит
# Проверить: https://uberbanking-production.up.railway.app
```

### Post-push checklist:

- [ ] GitHub показывает последний коммит
- [ ] Railway начал деплой
- [ ] Railway деплой завершен успешно
- [ ] Сайт работает на live URL
- [ ] Нет ошибок в Railway logs

---

## 🚨 Обработка ошибок (Claude делает автоматически)

### Railway деплой failed:

**Claude автоматически:**
1. Читает логи Railway из документа
2. Анализирует ошибки (TypeScript, build errors)
3. Исправляет проблемы локально
4. Проверяет build (`npm run build`)
5. Commit + Push с исправлениями
6. Документирует в session log
7. Информирует тебя о результате

**Пример обработки:**
```
Railway Error: Cannot find module '@/lib/utils'
→ Claude видит ошибку
→ Настраивает path aliases в tsconfig
→ Добавляет в vite.config
→ Устанавливает @types/node
→ Проверяет build
→ Commit "fix: configure path aliases"
→ Push в GitHub
→ Railway автодеплой успешен ✅
```

**Ты просто видишь результат: "✅ Ошибка исправлена, деплой успешен!"**

### Git конфликты:

```bash
git pull origin main
# Разрешить конфликты
git add .
git commit -m "fix: resolve merge conflicts"
git push origin main
```

### Откат изменений:

```bash
# Откат последнего коммита (локально)
git reset --soft HEAD~1

# Откат на конкретный коммит
git reset --hard [commit-hash]
git push --force origin main
```

---

## 📱 Railway CLI (опционально)

```bash
# Установка
npm install -g @railway/cli

# Логин
railway login

# Линк проекта
railway link d93f6b89-f4bb-4e77-a3af-bae744678dd6

# Деплой вручную
railway up

# Логи
railway logs

# Переменные окружения
railway variables
```

---

## 🎯 Правила именования коммитов

### Формат:
```
<type>(scope): <subject>

<body>

<footer>
```

### Types:
- `feat` - новая функциональность
- `fix` - исправление бага
- `docs` - документация
- `style` - форматирование
- `refactor` - рефакторинг
- `test` - тесты
- `chore` - рутинные задачи

### Примеры:
```bash
feat(session-1): setup project and tailwind config
fix(navbar): mobile menu not closing on link click
docs(readme): update installation instructions
style(components): format with prettier
refactor(auth): simplify login logic
chore(deps): update dependencies
```

---

## 🔗 Полезные ссылки

- **GitHub Repo:** https://github.com/digitalcluster25/uberbanking
- **Railway Project:** https://railway.app/project/d93f6b89-f4bb-4e77-a3af-bae744678dd6
- **Live URL:** https://uberbanking-production.up.railway.app
- **Railway Docs:** https://docs.railway.app
- **Vite Docs:** https://vitejs.dev

---

## 💡 Best Practices

1. **Atomic Commits** - один коммит = одна логическая задача
2. **Descriptive Messages** - понятные описания коммитов
3. **Test Before Push** - всегда проверять локально
4. **Document Decisions** - важные решения в `docs/decisions/`
5. **Track Issues** - проблемы в `docs/issues/`

---

*Правила созданы для обеспечения безшовного workflow между чатами*
