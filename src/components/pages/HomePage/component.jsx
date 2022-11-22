import { Route, Routes } from "react-router-dom";

import Home from "../../routs/Home";
import Error from "../../routs/Error";
import Users from "../../routs/Users";
import User from "../../routs/Users/User";
import UserIndex from "../../routs/Users/UserIndex";
import Posts from "../../routs/Posts";
import PostIndex from "../../routs/Posts/PostIndex";

import './styles.scss'

const HomePage=()=>  (
      <>
        <Routes>
          <Route path="/" element={<Home />} >
            
            <Route path="/users" element={<Users />} >
              <Route index element={<UserIndex />}/>
              <Route path =":userId" element={<User />} />
            </Route> 
            <Route path="/posts" element={<Posts/>}> 
              <Route index element={<PostIndex/>}/>
            </Route>
            
            </Route>

          <Route path="*" element={<Error />} />
        </Routes>
        </>
    );

export default HomePage;