import { Link } from "react-router-dom";

import './styles.scss'

const Error=()=>(
    <main>
      <h1>Error!</h1>
      <p>404</p>
      <nav className="nav">
        <Link to='/' className="link-users">Back to Home</Link>
      </nav>
    </main>
  )


export default Error;
