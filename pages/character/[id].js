import {useRouter} from 'next/router'
import { useQuery, gql } from '@apollo/client'
import  {Container} from '../../components/Container'

const GET_CHARACTER = gql`
  query getCharacter($id : ID!){
    character(id: $id){
      name
      status
      species
      type
      gender
      image
    }
  }
`;

const Character = () => {
  const router = useRouter();
  const { query: {id} } = router
  console.log(id + "hi")
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {id}
    });

    if(loading) return <h2>Cargando...</h2>
      console.log(data.character.name)
      console.log(error)

  return (
    <Container>
      <div className="card mt-5" >
        <div className="row g-0">
          <div className="col-12 col-lg-4">
            <img src={data.character.image} alt={data.character.name} style={{width:'100%'}}/>
          </div>
          <div className="col-12 col-lg-8">
            <div className="card-body">
              <h1 className="card-title">{data.character.name}</h1>
              <h5 className="card-text">
                Estatus: {data.character.status}
              </h5>
              <p className="card-text">
                Gender: {data.character.gender}
              </p>
              <p className="card-text">
                Species: {data.character.species}
              </p>
              <p className="card-text">
                Tipo: {data.character.type}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Character