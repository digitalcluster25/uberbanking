import { CheckCircle2, Circle, Clock } from 'lucide-react';

export default function BuildProgress() {
  const steps = [
    {
      id: 1,
      title: 'Проверка проекта',
      description: 'Проверка структуры и запуск dev server',
      status: 'in-progress',
      howToCheck: 'npm run dev → открыть http://localhost:5173',
      completed: null,
    },
    {
      id: 2,
      title: 'Дизайн-система',
      description: 'CSS переменные и шрифты в index.css',
      status: 'pending',
      howToCheck: 'Проверить переменные в DevTools → :root',
      completed: null,
    },
    {
      id: 3,
      title: 'MCP компоненты',
      description: 'Установка button, card, badge, input, label через MCP',
      status: 'pending',
      howToCheck: 'Проверить файлы в src/components/ui/',
      completed: null,
    },
    {
      id: 4,
      title: 'Layout компоненты',
      description: 'Container, Grid, Section компоненты',
      status: 'pending',
      howToCheck: 'Проверить файлы в src/components/layout/',
      completed: null,
    },
    {
      id: 5,
      title: 'Dark Mode',
      description: 'ThemeProvider и ThemeToggle',
      status: 'pending',
      howToCheck: 'Кликнуть на кнопку переключения темы',
      completed: null,
    },
    {
      id: 6,
      title: 'Тестовая страница',
      description: 'Showcase всех компонентов',
      status: 'pending',
      howToCheck: 'Визуально проверить все компоненты на странице',
      completed: null,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-blue-500 animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-gray-300" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      pending: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    };
    const labels = {
      completed: 'Выполнено',
      'in-progress': 'В процессе',
      pending: 'Ожидание',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badges[status as keyof typeof badges]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const completedSteps = steps.filter(s => s.status === 'completed').length;
  const totalSteps = steps.length;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            🚀 Session 1: Components Setup & Design System
          </h1>
          <p className="text-muted-foreground">
            Установка компонентов через MCP и настройка дизайн-системы
          </p>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Прогресс</span>
              <span className="text-sm font-medium text-foreground">{completedSteps} / {totalSteps}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-card border border-border rounded-lg p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(step.status)}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.id}. {step.title}
                      </h3>
                      {getStatusBadge(step.status)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  
                  <div className="bg-secondary/50 rounded-lg p-4 mb-3">
                    <p className="text-sm font-medium text-foreground mb-1">
                      🔍 Как проверить:
                    </p>
                    <code className="text-sm text-primary font-mono">
                      {step.howToCheck}
                    </code>
                  </div>

                  {step.completed && (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                        ✅ Выполнено:
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        {step.completed}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
            📋 После завершения Session 1
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-300">
            <li>Обновить PROGRESS.md</li>
            <li>Обновить CHANGELOG.md</li>
            <li>Создать docs/session-logs/session-1.md</li>
            <li>Git commit + push</li>
            <li>Эта страница переедет в Footer → "История создания"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
