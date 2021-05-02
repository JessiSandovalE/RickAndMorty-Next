import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import ClientOnly from '../components/ClientOnly'

const MyApp  = ({ Component, pageProps}) => {
  console.log('..dese _app.js')
  return (
    <ApolloProvider  client={client}>
      <ClientOnly>
        <Component {...pageProps}/>
      </ClientOnly>
    </ApolloProvider>
  )
}

export default MyApp