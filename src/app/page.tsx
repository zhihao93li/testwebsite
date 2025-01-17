import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import FAQ from '@/components/home/FAQ'
import Subscribe from '@/components/home/Subscribe'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Features />
      <Subscribe />
      <FAQ />
    </main>
  )
}
