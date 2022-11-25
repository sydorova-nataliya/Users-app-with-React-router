import { useEffect, useState } from "react"

const UsePostData=(url, deps = [], title, body, userId)=>{
    const [posts , setPosts] = useState([]);
    useEffect(()=>{

    fetch(url)
        .then(res=>res.json())
        .then(post=>setPosts(post))
    },deps)

    return posts

}
export default UsePostData;