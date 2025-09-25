import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerSize?: 'default' | 'narrow' | 'wide' | 'full'
  noPadding?: boolean
}

export function Section({ 
  children, 
  className,
  containerSize = 'default',
  noPadding = false,
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        !noPadding && 'py-12 sm:py-16 md:py-20 lg:py-24',
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
