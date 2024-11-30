import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import CTA from '@/components/cta'
import { ThemeToggle } from '@/components/theme-toggle'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <ScrollToTop />
    </main>
  )
}

