import { Link, Outlet } from "react-router-dom";

import './styles.scss'

const Home=()=>  {
  return(
    <>
    <main>
      <h1 className="title">Users app with using React-router</h1>
      <h2 className="subtitle">In this application, you can go to the users page, select the user you want and see their business information!</h2>
      <nav className="nav">
        <Link to='/users' className="link-users">Users</Link>
      </nav>
      <Outlet />
    </main>
    </>
  )
}


  export default Home;
