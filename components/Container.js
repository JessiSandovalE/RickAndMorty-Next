import Head from 'next/head'
import Navigation from './Navigation'

export const Container = ({children}) => {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
      </Head>
      <Navigation  />
      <div className="container pt-5 mt-5">
        { children }
      </div>
    </div>
  )
}
