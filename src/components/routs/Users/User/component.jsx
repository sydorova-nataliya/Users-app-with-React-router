import { useParams } from "react-router-dom";

import useGetData from "../../../../hooks/useGetData";

import './styles.scss'

const Users=()=>  {

  let {userId} = useParams();
  console.log(userId);

  let data = useGetData(`https://jsonplaceholder.typicode.com/users/${userId}`);
  console.log(data);

  if(!userId){
    return(
        <p>You can select "More information" in the user to get business information about this user</p>
    )
  }

  return(
    <div>{data.username}</div>
  )
}

export default Users;

