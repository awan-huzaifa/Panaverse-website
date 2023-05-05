import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/widgets/Hero'
import CoreTracks from '@/widgets/CoreTracks'
import Tracks from '@/widgets/Tracks'
import Outcome from '@/components/layout/Outcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <Hero/>
    <CoreTracks/>
    <Tracks/>
    <Outcome/>
    </>
  )
}
