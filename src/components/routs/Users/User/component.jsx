import { useParams } from "react-router-dom";

import useGetData from "../../../../hooks/useGetData";

import './styles.scss'

const User=()=>  {

    let {userId} = useParams();
    console.log(userId);
    let {data, _, loading} = useGetData(`https://jsonplaceholder.typicode.com/users/${userId}`, [userId]);
    if(loading || data.length === 0) {
      return 'Loading ...';
  }
    console.log(data);
    const {id, name, username,email, address:{street,suite, city, zipcode,geo:{lat, lng}},phone,website,company:{name:companyName, catchPhrase,bs}} = data;

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



export default User;

