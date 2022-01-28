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
        <div id='#personal' style={{ height: '400px' }}>
          personal
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

// Fetching data for testing purposes
// export async function getStaticProps({ locale }) {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const todo = await response.json()

//   return {
//     props: {
//       todo,
//       ...await serverSideTranslations(locale, ['common']),
//     },
//   }
// }
