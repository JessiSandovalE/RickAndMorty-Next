import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useQuery, gql } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroll-component'

const QUERY = gql `
  query getCharacters($page: Int){
    characters(page: $page ){
      info{
        count
      }
      results{
        id
        name
        image
        species
      }
    }
  }
`;


const Characters = () => {

  const [page,setPage] = useState(1);
  const [ info, setInfo] = useState([])
  const { data, loading, error, fetchMore } = useQuery(QUERY, {
    variables: {page}
  });

  if(loading){
    return null
  }
  if(error){
    console.error(error)
    return null
  }

  const viewCharacter = (id) => {
    Router.push({
      pathname: '/character/[id]',
      query: {id}
    })
  }
  const fetchMoreData = () => {
    setPage(page+1)
    const {endCursor} = data.characters.results
    fetchMore({
      variables: {after: endCursor},
      updateQuery: (prevResult, {fetchMoreResult}) => {

        return
      }
    })
  }
  return(
    <div >
        <InfiniteScroll
          dataLength={data.characters.info.count}
          next = {()=>fetchMoreData() }
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="row"
        >

          {data.characters.results.map(character => (
            //<Link href="/character/[id]" as={``}>
            <div
              key={character.id}
              onClick={()=> viewCharacter(character.id)}
              className="col-12 col-md-4 mb-3 "
            >
              <div className="card">
                <img src={character.image} alt={character.name} className="card-img-top"/>
                <div className="card-body">
                  <div className="card-title">
                    <h3>{character.name}</h3>
                  </div>
                  <div className="card-text">
                    <p>Especie: {character.species}</p>
                  </div>
                </div>
              </div>
            </div>
            //</Link>
          ))}
        </InfiniteScroll>
    </div>
  )
}

export default Characters
