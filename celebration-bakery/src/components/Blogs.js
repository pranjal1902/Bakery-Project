import { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
function Blogs(){
    const fetchData = ()=>{
        axios.get("http://localhost:3001/api/blogs")
        .then((res)=>{console.log(res.data);setBlogsData(res.data)})
        .catch((e)=>{console.log(e)});
    }
    const [blogsData,setBlogsData] = useState([]);
    
    useEffect(fetchData,[]);
    
    return(
        <>
             <div class="blog">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage text_align_center ">
                     <h2>Latest Blog</h2>
                     <p>
                        <br/>Welcome to our Bakery!!!</p>
                  </div>
               </div>
            </div>
            <div class="row d_flex">
                {
                    blogsData.map(
                        (item) => {
                            return <Blog image={item.image} title={item.title} date={item.date} blog_content={item.blog_content}/>
                        }
                    )
                }
            </div>
         </div>
      </div>
        </>
    );
}
export default Blogs;