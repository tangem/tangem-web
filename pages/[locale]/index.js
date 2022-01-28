import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'


import { Header } from '../../components/header'

export default function Home({ }) {

  const { t } = useTranslation('common')
  
  return (
    <div>
      <Head>
        <title>Tangem web</title>
      </Head>

      <Header />

      <main>
        <h1>
          {t('h1')}
        </h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
