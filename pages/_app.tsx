import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion ,AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial="initialState" animate="animState" exit="exitState" transition={{duration:0.75}}
        variants={{
          initialState: {
            opacity:0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          animState: {
            opacity:1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          exitState: {
            opacity:0,
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  
  
  
  
  )
}
