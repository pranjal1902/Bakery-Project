function Service(props){
    return(
        <div class="col-md-4">
        <div id="ho_shad" class="services_box text_align_left">
           <h3><i>&nbsp; &nbsp; &nbsp;{props.title}</i></h3>
           <figure><img src={props.image} alt="#" height="300" width="300"/></figure>
           <p>{props.description}</p>
           <a class="read_more" href="service.html">Read More</a>
        </div>
     </div>
    );
}
export default Service;