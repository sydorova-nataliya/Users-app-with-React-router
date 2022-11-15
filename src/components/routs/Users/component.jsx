import { NavLink, Outlet} from "react-router-dom";

import useGetData from "../../../hooks/useGetData";
import './styles.scss'

const Users=()=>  {
  let {data, _, loading} = useGetData('https://jsonplaceholder.typicode.com/users');

  return(
  
    <nav className="users-nav">
      <div>
      {data.map(({name,username, email, id})=>(  
        <div key={id} className="user">   
          <h3 className="name bold">Name: <span>{name}</span></h3>
          <h4 className="username bold">Username: <span>{username}</span></h4>
          <a href="mailto:" className="email">Email: {email}</a>
          <NavLink
          className="user-link"
            style={({isActive})=>{
              return {
                color: isActive ? "red" : "rgb(103, 47, 103)",
              };
            }}
            to={`/users/${id}`}
            >
              More information
            </NavLink>
          </div>
          )
      )}
      
      </div>
      <Outlet />
    </nav>
    
 
  )
}

export default Users;

