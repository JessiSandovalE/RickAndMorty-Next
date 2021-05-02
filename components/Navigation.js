import Link from 'next/link'

const Navigation = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img  src="./assets/logo.png" alt="logo"/>
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Personajes</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation