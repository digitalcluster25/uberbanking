import { cn } from '@/lib/utils'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
  gap?: string
}

export function Grid({ 
  children, 
  className, 
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'gap-6',
  ...props 
}: GridProps) {
  const gridCols = cn(
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
    cols['2xl'] && `2xl:grid-cols-${cols['2xl']}`
  )

  return (
    <div
      className={cn('grid', gridCols, gap, className)}
      {...props}
    >
      {children}
    </div>
  )
}
