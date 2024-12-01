import Features from '@/components/features'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import CTA from '@/components/cta' 
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground"> 
     
        
        <Hero />
        <Features />
        <HowItWorks /> 
        
        <CTA /> 
        <ScrollToTop />  
    </main>
  )
}

