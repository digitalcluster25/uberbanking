import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
}

export function Container({ 
  children, 
  className, 
  size = 'default',
  ...props 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl',      // 1280px
    narrow: 'max-w-4xl',       // 896px (для текстового контента)
    wide: 'max-w-[1400px]',    // 1400px (для широких таблиц)
    full: 'max-w-full',        // Full width
  }

  return (
    <div
      className={cn(
        'mx-auto w-full',
        'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
