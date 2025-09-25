# 🚀 Quick Start Guide - New Session

> Используй эту команду для начала новой сессии разработки

---

## 📋 Команда для нового чата

```
Продолжаем разработку UberBanking.

Статус: [прочитай PROGRESS.md]
Задача: [прочитай ROADMAP.md - текущая сессия]

Начинай работу с текущего этапа без объяснений.
```

---

## 🔍 Что Claude сделает автоматически:

1. ✅ Прочитает `PROGRESS.md` → поймет текущий статус
2. ✅ Прочитает `ROADMAP.md` → увидит текущую задачу
3. ✅ Прочитает последний `docs/session-logs/session-X.md` → поймет контекст
4. ✅ **Сразу начнет работу** без дополнительных вопросов

---

## 📊 Что должно быть обновлено после сессии:

### 1. PROGRESS.md
```markdown
## ✅ Сессия X завершена
- Дата: 2025-01-26
- Выполнено: [список задач]
- Следующий шаг: Session X+1
```

### 2. docs/session-logs/session-X.md
```markdown
# Session X Log
- Что сделано
- Какие баги исправлены
- Технические решения
- Коммиты
- Результат
- Следующий шаг
```

### 3. CHANGELOG.md
```markdown
## [Session X] - 2025-01-26
### Added
- Feature 1
### Fixed
- Bug 1
```

### 4. Git Commit
```bash
git add .
git commit -m "feat(session-X): description

- Added: [что добавлено]
- Fixed: [что исправлено]

Session X completed ✅"
git push origin main
```

---

## ✅ Чеклист завершения сессии

### Pre-commit:
- [ ] `npm run build` - успешная сборка
- [ ] `npm run dev` - работает локально
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Responsive на всех устройствах
- [ ] Dark mode работает (если применимо)

### Documentation:
- [ ] Обновлен `PROGRESS.md`
- [ ] Создан `docs/session-logs/session-X.md`
- [ ] Обновлен `CHANGELOG.md`
- [ ] Обновлен `README.md` (если нужно)

### Git & Deploy:
- [ ] `git status` - проверить изменения
- [ ] `git add .` - добавить все файлы
- [ ] `git commit -m "..."` - коммит с описанием
- [ ] `git push origin main` - пуш в репозиторий
- [ ] Проверить Railway deploy
- [ ] Проверить live URL работает

---

## 🔗 Важные ссылки

### 📚 Документация:
- **SYSTEM_RULES.md** - 🔐 Полные системные правила (ГЛАВНЫЙ ФАЙЛ)
- **PROGRESS.md** - Текущий прогресс
- **ROADMAP.md** - План с задачами
- **PROJECT_RULES.md** - Правила workflow и git
- **QUICKSTART.md** - Этот файл

### 🔗 Инфраструктура:
- **GitHub:** https://github.com/digitalcluster25/uberbanking
- **Railway:** https://railway.app/project/d93f6b89-f4bb-4e77-a3af-bae744678dd6

---

## 🎯 Структура команды продолжения

### Минимальная версия:
```
Продолжаем UberBanking. Читай PROGRESS.md и ROADMAP.md. Начинай работу.
```

### Полная версия:
```
Продолжаем разработку UberBanking.

Текущий статус: [прочитай PROGRESS.md]
Текущая задача: [прочитай ROADMAP.md - Session X]
Последний лог: [прочитай docs/session-logs/session-X-1.md]

Контекст понятен. Начинай работу с текущего этапа без объяснений.
Не спрашивай подтверждения, сразу приступай к разработке.
```

### С конкретной задачей (если нужно):
```
Продолжаем UberBanking.

Статус: Session X в процессе
Задача: [конкретная задача из ROADMAP]

Начинай с [конкретного шага].
```

---

## 🚨 Если что-то пошло не так

### Railway deploy failed:
```bash
# Проверить логи
railway logs

# Исправить ошибку
# Коммит + Пуш снова
git add .
git commit -m "fix: исправлена ошибка деплоя"
git push origin main
```

### Git конфликты:
```bash
git pull origin main
# Разрешить конфликты в файлах
git add .
git commit -m "fix: resolve merge conflicts"
git push origin main
```

### Забыл обновить документацию:
```bash
# Обновить файлы
# Коммит документации отдельно
git add PROGRESS.md CHANGELOG.md docs/
git commit -m "docs(session-X): update progress and logs"
git push origin main
```

---

## 💡 Tips

1. **Всегда читай PROGRESS.md перед началом** - там актуальный статус
2. **Проверяй ROADMAP.md** - там точный план текущей сессии
3. **Изучай последний session log** - там контекст и заметки
4. **Коммить после каждой завершенной задачи** - не ждать конца сессии
5. **Тестировать локально перед push** - избежать ошибок на Railway
6. **Документировать важные решения** - в docs/decisions/
7. **Фиксировать проблемы** - в docs/issues/

---

*Храни этот файл открытым при начале каждой новой сессии*
