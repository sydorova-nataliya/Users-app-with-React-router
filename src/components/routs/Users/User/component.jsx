import { useParams } from "react-router-dom";

import useGetData from "../../../../hooks/useGetData";

import './styles.scss'

const Users=()=>  {

  let {userId} = useParams();
  if(userId===undefined){
    return ;
  }
    let {data, _, loading} = useGetData(`https://jsonplaceholder.typicode.com/users/${userId}`, [userId]);
    console.log(data);
    const {id, name, username,email, address:{street,suite, city, zipcode,geo:{lat, lng}},phone,website,company:{name:companyName, catchPhrase,bs}} = data;
    if(!userId){
      return(
          <p>You can select "More information" in the user to get business information about this user</p>
      )
    }
  
    return(
      <div className="info">
        <h4 className="info__title">Detailed infrormation about {name}</h4>
        <address className="info__adress">
         <span className="bold">Address: </span>{city}, {street}, {suite} <br/> 
         <span className="bold">Zipcode: </span>{zipcode} <br/> 
         <span className="bold">Geo: </span>{lat} {lng}
        </address>
        <a href="#" className="info__tel"><span className="bold">Phone: </span>{phone}</a> <br/>
        <a href="#" className="info__website">{website}</a>
        <p className="info__company"><span className="bold">Company: </span>{companyName}</p>
      </div>
    )
  }



export default Users;

