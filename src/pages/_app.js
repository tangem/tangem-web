import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import '../../public/styles/normalize.css'
import '../../public/styles/fonts.scss'
import '../../public/styles/tailwind.css'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2000)

    router.events.on("routeChangeError", (e) => {
      console.log('route change error')
      setLoading(false)
    })

    router.events.on("routeChangeStart", (e) => {
      console.log('route change start')
      setLoading(true)
    })

    router.events.on("routeChangeComplete", (e) => {
      console.log('route change complete')
      setLoading(false)
    })

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false))
      router.events.off("routeChangeStart", (e) => setLoading(true))
      router.events.off("routeChangeComplete", (e) => setLoading(false))
    };
  }, [])


  return <>{loading ? (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <div className="h-full flex items-center justify-center">
        <div style={{ borderTopColor: 'transparent' }} className="w-16 h-16 border-4 border-black border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  ) : (
    <Component {...pageProps} />
  )}</>
}
