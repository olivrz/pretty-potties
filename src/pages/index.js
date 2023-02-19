import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pretty Potties</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main>
          <div className='bg-image'>
              <div className="page">
                  <h1 className="welcome">Welcome to pretty potties</h1>
              </div>
          </div>

      </main>
    </>
  )
}
