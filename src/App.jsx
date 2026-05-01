import { useEffect, useState } from "react";

function App() {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data)
        setPosts(data)

      }
      catch(error){
        console.log("Error : ", error);
      }
    };

    fetchData()
  },[])

  return(
    <div>
      <h1>API practice posts</h1>
      {posts.map((item,index) => (
        <div key = {item.id}>
          <p>{index + 1}{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )

}

export default App;