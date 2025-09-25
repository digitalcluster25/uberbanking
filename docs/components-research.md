# UberBanking Platform - Components Research Documentation

> **Статус проекта:** Начальная стадия - компоненты не реализованы  
> **Дата анализа:** Январь 2025  
> **Документ создан на основе:** [brd.md](./brd.md) в соответствии с [component-library.md](./component-library.md)

---

## 📋 Оглавление

1. [Обзор проекта](#обзор-проекта)
2. [Методология анализа](#методология-анализа)
3. [Полный список компонентов по модулям](#полный-список-компонентов-по-модулям)
4. [Исследование библиотек компонентов](#исследование-библиотек-компонентов)
5. [План реализации](#план-реализации)
6. [Дизайн-система](#дизайн-система)

---

## 🎯 Обзор проекта

**UberBanking** - агрегатор банков для подбора банковских решений для бизнеса по всему миру.

### Технический стек
- **Frontend:** React 19 + TypeScript + Vite
- **Стилизация:** Tailwind CSS
- **Компоненты:** Re UI (приоритет) + shadcn/ui (fallback)
- **Роутинг:** React Router DOM
- **Иконки:** Lucide React

---

## 🔬 Методология анализа

Следуя алгоритму из `component-library.md`, выполнены следующие шаги:

### 1. ✅ Анализ технического задания
- Изучено полное ТЗ из `brd.md`
- Выявлено 6 основных модулей + нефункциональные требования
- Определены все экраны и User Stories

### 2. ✅ Составление списка компонентов
- Классифицированы компоненты по категориям
- Определены приоритеты использования
- Составлен полный инвентарь UI-элементов

### 3. 🔄 Исследование библиотек (в процессе)
- Поиск готовых решений в Re UI
- Поиск fallback компонентов в shadcn/ui
- Документирование найденных компонентов

### 4. 📝 Планирование реализации
- Определение очередности разработки
- План стилизации и кастомизации

---

## 📦 Полный список компонентов по модулям

### **МОДУЛЬ 0: Публичный портал**

#### 🏠 Главная страница
| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Hero Section с CTA | Высокий | ✅ hero-section | - | - |
| Feature Cards | Высокий | ✅ feature-section | Card | - |
| Stats/Metrics Display | Высокий | ✅ statistic-card | - | - |
| Footer | Средний | ✅ footer | - | - |
| Navigation Header | Высокий | ✅ navbar | - | - |

#### 🏦 Каталог банков
| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Bank Card | Высокий | - | Card | ✅ |
| Search Input | Высокий | - | Input | - |
| Filter Sidebar | Высокий | - | Sheet + Checkbox | - |
| Select Dropdown | Высокий | - | Select | - |
| Badge (теги) | Высокий | - | Badge | - |
| Pagination | Средний | - | - | ✅ |
| Sort Dropdown | Средний | - | DropdownMenu | - |

#### 📄 Детальная страница банка
| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Bank Header с рейтингом | Высокий | - | - | ✅ Star Rating |
| Pricing Table | Высокий | - | Table | - |
| Tabs (Описание/Тарифы/Отзывы) | Высокий | - | Tabs | - |
| Reviews Section | Средний | - | Card | ✅ |
| CTA Button | Высокий | - | Button | - |
| Breadcrumbs | Низкий | - | - | ✅ |

---

### **МОДУЛЬ 1: Регистрация и онбординг клиентов**

| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Multi-step Form (Stepper) | Высокий | - | - | ✅ |
| Text Input | Высокий | - | Input | - |
| Select с поиском (Combobox) | Высокий | - | Command | - |
| Phone Input с маской | Высокий | - | Input | ✅ react-input-mask |
| Number Input | Высокий | - | Input | - |
| Textarea | Средний | - | Textarea | - |
| File Uploader (drag&drop) | Высокий | - | - | ✅ react-dropzone |
| Progress Bar | Средний | - | Progress | - |
| Form Validation | Высокий | - | Form | ✅ react-hook-form |
| Label | Высокий | - | Label | - |

---

### **МОДУЛЬ 2: Партнеры (Банки)**

| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Partner Landing Page | Высокий | ✅ landing-template | - | - |
| Application Form | Высокий | - | Form | - |
| Multi-select Tags | Высокий | - | - | ✅ react-select |
| Image Upload (Logo) | Высокий | - | - | ✅ |
| Dynamic Fields (Add/Remove) | Средний | - | - | ✅ |
| Range Input | Средний | - | Slider | - |
| Toggle Switch | Средний | - | Switch | - |

---

### **МОДУЛЬ 3: Алгоритм подбора и предложения**

| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Proposals Data Table | Высокий | - | Table | ✅ |
| Action Buttons | Высокий | - | Button | - |
| Modal (Details/Apply) | Высокий | - | Dialog | - |
| Status Badge | Высокий | - | Badge | - |
| Blur Overlay (Premium) | Средний | - | - | ✅ |
| Alert Banner | Средний | - | Alert | - |
| Table Sort/Filter | Средний | - | - | ✅ |

---

### **МОДУЛЬ 4: Коммуникация и чат**

| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Chat Interface | Высокий | - | - | ✅ |
| Message Bubble | Высокий | - | Card | ✅ |
| Chat Input | Высокий | - | Textarea | ✅ |
| File Attachment Button | Высокий | - | Button | ✅ |
| Avatar | Средний | - | Avatar | - |
| Unread Badge | Средний | - | Badge | - |
| Tabs (Active/Archive) | Средний | - | Tabs | - |
| Search Chat | Средний | - | Input | - |
| Timestamp | Низкий | - | - | ✅ |
| Typing Indicator | Низкий | - | - | ✅ |

---

### **МОДУЛЬ 5: Панель администратора**

| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Admin Dashboard | Высокий | ✅ dashboard-template | Card | - |
| Data Table с фильтрами | Высокий | - | Table | ✅ |
| Modal (Edit/Details) | Высокий | - | Dialog | - |
| Dropdown Actions Menu | Высокий | - | DropdownMenu | - |
| Confirmation Dialog | Высокий | - | AlertDialog | - |
| Toast Notifications | Средний | - | Toast | - |
| CRUD Forms | Высокий | - | Form | - |
| Stats Cards | Высокий | ✅ statistic-card | - | - |
| Search & Filter Panel | Средний | - | - | ✅ |

---

### **МОДУЛЬ 6: Монетизация**

| Компонент | Приоритет | Re UI | shadcn/ui | Кастом |
|-----------|-----------|-------|-----------|--------|
| Pricing Cards | Высокий | ✅ pricing-section | Card | - |
| Payment Form | Высокий | - | Form | ✅ Stripe |
| Plan Toggle (Free/Paid) | Средний | - | Switch | - |
| Lock Icon Overlay | Средний | - | - | ✅ |
| Upgrade Banner | Средний | - | Alert | - |
| Subscription Status | Средний | - | Badge | - |

---

## 🔍 Исследование библиотек компонентов

### Re UI - Приоритетные компоненты

**✅ Re UI доступен через @reui registry (677 компонентов)**

#### Установка через CLI:
```bash
# Поиск компонентов
npx shadcn@latest search @reui

# Просмотр компонента
npx shadcn@latest view @reui/statistic-card-1

# Установка компонента
npx shadcn@latest add @reui/statistic-card-1
```

#### Использование через MCP (в Claude/IDE):
```
Add @reui/statistic-card-1 component
Add @reui/base-autocomplete-default component
Add @reui/line-chart-5 component
```

#### ✅ Готовые блоки (Sections) из Re UI:

1. **Statistic Cards** (15 вариантов)
   - Registry: `@reui/statistic-card-1` до `@reui/statistic-card-15`
   - Использование: Dashboard админки, главная страница
   - Установка: `npx shadcn@latest add @reui/statistic-card-1`

2. **Charts**
   - Area Charts: `@reui/area-chart-1` до `@reui/area-chart-5`
   - Line Charts: `@reui/line-chart-1` до `@reui/line-chart-9`
   - Использование: Аналитика, статистика

3. **Accordions**
   - Registry: `@reui/accordion-default`, `@reui/accordion-indicator`, etc.
   - Использование: FAQ, списки с раскрытием

4. **Alerts**
   - Registry: `@reui/alert-default`, `@reui/alert-actions`, etc.
   - Использование: Уведомления, баннеры

5. **Avatars & Badges**
   - Registry: `@reui/avatar-*`, `@reui/badge-*`
   - Использование: Профили пользователей, статусы

6. **Base UI Components**
   - Autocomplete: `@reui/base-autocomplete-*`
   - Phone Input: `@reui/base-phone-input-*`
   - Data Grid: `@reui/base-data-grid-*`
   - Forms: `@reui/base-form-*`

---

### shadcn/ui - Базовые компоненты

#### 📦 Core UI Components

1. **Button** - Все интерактивные действия
   ```bash
   npx shadcn@latest add button
   ```

2. **Card** - Карточки банков, контент блоки
   ```bash
   npx shadcn@latest add card
   ```

3. **Badge** - Теги, статусы, индикаторы
   ```bash
   npx shadcn@latest add badge
   ```

4. **Input** - Текстовые поля форм
   ```bash
   npx shadcn@latest add input
   ```

5. **Select** - Выпадающие списки
   ```bash
   npx shadcn@latest add select
   ```

6. **Checkbox** - Фильтры, множественный выбор
   ```bash
   npx shadcn@latest add checkbox
   ```

7. **Textarea** - Многострочный ввод
   ```bash
   npx shadcn@latest add textarea
   ```

8. **Label** - Метки полей форм
   ```bash
   npx shadcn@latest add label
   ```

#### 📋 Form Components

9. **Form** - Управление формами с валидацией
   ```bash
   npx shadcn@latest add form
   ```

10. **Command** - Combobox с поиском
    ```bash
    npx shadcn@latest add command
    ```

11. **Radio Group** - Выбор одного варианта
    ```bash
    npx shadcn@latest add radio-group
    ```

12. **Switch** - Toggle переключатели
    ```bash
    npx shadcn@latest add switch
    ```

13. **Slider** - Range inputs
    ```bash
    npx shadcn@latest add slider
    ```

#### 🗂️ Layout Components

14. **Table** - Таблицы данных
    ```bash
    npx shadcn@latest add table
    ```

15. **Tabs** - Вкладки контента
    ```bash
    npx shadcn@latest add tabs
    ```

16. **Separator** - Разделители
    ```bash
    npx shadcn@latest add separator
    ```

17. **Sheet** - Боковые панели, мобильное меню
    ```bash
    npx shadcn@latest add sheet
    ```

#### 💬 Feedback Components

18. **Dialog** - Модальные окна
    ```bash
    npx shadcn@latest add dialog
    ```

19. **Alert Dialog** - Подтверждения
    ```bash
    npx shadcn@latest add alert-dialog
    ```

20. **Alert** - Уведомления, баннеры
    ```bash
    npx shadcn@latest add alert
    ```

21. **Toast** - Всплывающие уведомления
    ```bash
    npx shadcn@latest add toast
    ```

22. **Progress** - Прогресс бары
    ```bash
    npx shadcn@latest add progress
    ```

#### 🎨 Display Components

23. **Avatar** - Аватары пользователей
    ```bash
    npx shadcn@latest add avatar
    ```

24. **Dropdown Menu** - Контекстные меню
    ```bash
    npx shadcn@latest add dropdown-menu
    ```

25. **Skeleton** - Загрузочные плейсхолдеры
    ```bash
    npx shadcn@latest add skeleton
    ```

---

## 🛠️ Кастомные компоненты (необходимо разработать)

### Высокий приоритет:

1. **BankCard** - Карточка банка в каталоге
   - Базируется на: shadcn Card
   - Добавить: Logo, Rating, Tags, CTA

2. **StarRating** - Компонент рейтинга
   - Базируется на: Lucide Icons
   - Функции: Display only / Interactive

3. **MultiStepForm** - Многошаговая форма
   - Базируется на: shadcn Form
   - Добавить: Stepper, Navigation, Progress

4. **FileUploader** - Загрузка файлов
   - Библиотека: react-dropzone
   - Функции: Drag & drop, Multiple files, Preview

5. **ChatInterface** - Интерфейс чата
   - Базируется на: Custom
   - Компоненты: MessageBubble, ChatInput, FileAttachment

6. **DataTable** - Расширенная таблица
   - Базируется на: shadcn Table
   - Добавить: Sorting, Filtering, Pagination, Actions

7. **PhoneInput** - Телефонный инпут
   - Библиотека: react-phone-input-2
   - Функции: Country code, Formatting, Validation

### Средний приоритет:

8. **TagsInput** - Мультиселект тегов
   - Библиотека: react-select / react-tag-input
   - Стиль: Tailwind CSS

9. **PremiumBlur** - Блюр для премиум контента
   - Базируется на: CSS + Overlay
   - Функции: Blur effect, Unlock CTA

10. **ImageUpload** - Загрузка изображений
    - Функции: Crop, Preview, Validation

### Низкий приоритет:

11. **Breadcrumbs** - Хлебные крошки
12. **Pagination** - Постраничная навигация
13. **TypingIndicator** - Индикатор печати
14. **Timestamp** - Форматирование времени

---

## 🎨 Дизайн-система

### Цветовая палитра (планируется)
```css
:root {
  /* Primary colors */
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  
  /* Financial/Banking theme */
  --bank-blue: 214 95% 36%;
  --bank-green: 142 76% 36%;
  --bank-gold: 45 93% 47%;
  
  /* Status colors */
  --success: 142 76% 36%;
  --warning: 38 92% 50%;
  --error: 0 84% 60%;
  --info: 199 89% 48%;
}
```

### Типографика
- **Font Family:** Inter (system fonts fallback)
- **Headings:** Font weight 600-700
- **Body:** Font weight 400-500
- **Scale:** 12px - 48px

### Spacing
- Base unit: 4px (0.25rem)
- Scale: 4, 8, 12, 16, 24, 32, 48, 64px

### Border Radius
- Small: 4px (sm)
- Medium: 8px (md)
- Large: 12px (lg)
- Extra Large: 16px (xl)

### Shadows
- sm: subtle elevation
- md: card elevation
- lg: modal/dialog elevation

---

## 📝 План реализации

### Фаза 1: Инфраструктура (Неделя 1)
1. ✅ Инициализация проекта Vite + React + TypeScript
2. ✅ Настройка Tailwind CSS
3. ✅ Установка shadcn/ui CLI
4. ✅ Настройка Re UI интеграции
5. ✅ Установка базовых библиотек

### Фаза 2: Базовые компоненты (Недели 2-3)
1. Установка всех shadcn/ui компонентов (список выше)
2. Установка Re UI блоков (hero, features, stats, pricing)
3. Создание дизайн-токенов и темы
4. Настройка компонентной библиотеки

### Фаза 3: Кастомные компоненты (Недели 4-5)
1. BankCard, StarRating
2. MultiStepForm, FileUploader
3. PhoneInput, TagsInput
4. DataTable с расширенным функционалом

### Фаза 4: Модули приложения (Недели 6-12)
- Неделя 6-7: Модуль 0 (Публичный портал)
- Неделя 8-9: Модуль 1-2 (Регистрация)
- Неделя 10-11: Модуль 3-4 (Подбор и чат)
- Неделя 12: Модуль 5-6 (Админка и монетизация)

---

## 🔐 Нефункциональные требования

### Безопасность
- Все формы с CSRF защитой
- Input validation на клиенте и сервере
- Secure file upload с проверкой типов

### Производительность
- Lazy loading компонентов
- Code splitting по роутам
- Optimized bundle size
- Image optimization

### Доступность (a11y)
- WCAG 2.1 Level AA
- Keyboard navigation
- Screen reader support
- Semantic HTML

### Адаптивность
- Mobile-first подход
- Breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Touch-friendly интерфейсы

---

## 📚 Дополнительные библиотеки

### Обязательные:
```json
{
  "react-hook-form": "^7.x", // Управление формами
  "zod": "^3.x", // Валидация схем
  "react-dropzone": "^14.x", // Загрузка файлов
  "react-phone-input-2": "^2.x", // Телефонный ввод
  "react-select": "^5.x", // Расширенные селекты
  "date-fns": "^3.x", // Работа с датами
  "lucide-react": "^0.x" // Иконки
}
```

### Опциональные:
```json
{
  "framer-motion": "^11.x", // Анимации
  "react-query": "^5.x", // Управление состоянием сервера
  "zustand": "^4.x", // Глобальное состояние
  "socket.io-client": "^4.x" // WebSocket для чата
}
```

---

## ✅ Контрольный чеклист готовности

### Перед началом разработки модулей:
- [ ] Все shadcn/ui компоненты установлены
- [ ] Re UI блоки интегрированы
- [ ] Дизайн-система настроена
- [ ] Типы TypeScript определены
- [ ] Базовая структура проекта готова

### Перед деплоем модуля:
- [ ] Все компоненты используют библиотеку (мин. кастома)
- [ ] Адаптивность проверена
- [ ] Accessibility протестирована
- [ ] Производительность оптимизирована
- [ ] Код задокументирован

---

## 🚨 Правила разработки

### ❌ ЗАПРЕЩЕНО:
- Писать компоненты с нуля без проверки Re UI
- Использовать inline стили вместо Tailwind
- Игнорировать accessibility
- Дублировать логику компонентов
- Использовать устаревшие библиотеки

### ✅ ОБЯЗАТЕЛЬНО:
- Приоритет Re UI → shadcn/ui → Кастом
- Консистентность дизайна
- TypeScript строгий режим
- Responsive design
- Документирование кастомных компонентов

---

## 📊 Статистика компонентов

### По источникам:
- **Re UI:** 6 готовых блоков
- **shadcn/ui:** 25 базовых компонентов
- **Кастомные:** ~14 компонентов (требуют разработки)

### По приоритету:
- **Высокий:** 32 компонента
- **Средний:** 18 компонентов
- **Низкий:** 4 компонента

### По модулям:
- **Модуль 0:** 15 компонентов
- **Модуль 1:** 10 компонентов
- **Модуль 2:** 7 компонентов
- **Модуль 3:** 7 компонентов
- **Модуль 4:** 10 компонентов
- **Модуль 5:** 9 компонентов
- **Модуль 6:** 6 компонентов

---

## 📝 История изменений

| Дата | Версия | Изменения |
|------|--------|-----------|
| 2025-01-XX | 1.0 | Первоначальный анализ компонентов на основе brd.md |

---

*Этот документ является живым и будет обновляться по мере развития проекта и добавления новых компонентов.*
