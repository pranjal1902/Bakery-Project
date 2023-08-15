function Slider(){
    return(<div class="slider_main">
            <div id="banner1" class="carousel slide">
               <ol class="carousel-indicators">
                  <li data-target="#banner1" data-slide-to="0" class="active"></li>
                  <li data-target="#banner1" data-slide-to="1"></li>
                  <li data-target="#banner1" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner"> 
                  <div class="carousel-item active">
                     <div class="container">
                        <div class="carousel-caption relative">
                           <div class="row d_flex">
                              <div class="col-md-5">
                                 <div class="creative">
                                    <h1>Fresh <br/>Pastries </h1>
                                    <p><i>WELCOME TO OUR BAKERY!!!</i></p>
                                    <a class="read_more" href="Javascript:void(0)">Contact us</a>
                                    <a class="read_more" href="Javascript:void(0)">Read More</a>
                                 </div>
                              </div>
                              <div class="col-md-7">
                                 <div class="row mar_right">
                                    <div class="col-md-6">
                                       <div class="agency">
                                          <figure><img src="images/2bakery.jfif"  alt="#"/></figure>
                                          <div class="play_icon">
                                             <a class="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="agency">
                                          <figure><img src="images/3bakery.jfif" alt="#"/></figure>
                                          <div class="play_icon">
                                             <a class="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <div class="carousel-caption relative">
                           <div class="row d_flex">
                              <div class="col-md-5">
                                 <div class="creative">
                                    <h1>FAMOUS ITEM  </h1>
            
                                    
                                    <a class="read_more" href="Javascript:void(0)">Contact us</a>
                                    <a class="read_more" href="Javascript:void(0)">Read More</a>
                                 </div>
                              </div>
                              <div class="col-md-7">
                                 <div class="row mar_right">
                                    <div class="col-md-6">
                                       <div class="agency">
                                          <figure><img src="images/6bakery.jfif" alt="#"/></figure>
                                          <div class="play_icon">
                                             <a class="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="agency">
                                          <figure><img src="images/9bakery.jfif" alt="#"/></figure>
                                          <div class="play_icon">
                                             <a class="play-btn" href="javascript:void(0)"><img src="images/play_icon.png"/></a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  
               </div>
               <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
               <i class="fa fa-angle-left" aria-hidden="true"></i>
               <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
               <i class="fa fa-angle-right" aria-hidden="true"></i>
               <span class="sr-only">Next</span>
               </a>
            </div>
         </div>
      );
}
export default Slider;