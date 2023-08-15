function Blog(props){
    return(
        <>
            <div class=" col-md-4">
                  <div class="latest">
                     <figure><img src={props.image} alt="#"/></figure>
                     <span>{props.date}</span>
                     <div class="nostrud">
                        <h3>{props.title}</h3>
                        <p>{props.blog_content}</p>
                        <a class="read_more" href="blog.html">Read More</a>
                     </div>
                  </div>
               </div>
        </>
    );
}
export default Blog;