function Appointment(){
    return(<div class="appointment">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="titlepage text_align_center">
                     <h2>BOOKING &nbsp; &nbsp; AVAILABLE &nbsp; &nbsp; FOR</h2>
                     <p>For Birthdays , Anniversaries  , Marriages and many other special occasions..</p>
                  </div>
               </div>
               <div class="col-md-12">
                  <form id="request" class="main_form">
                     <div class="row">
                        <div class="col-md-6 ">
                           <input class="form_control" placeholder="Your name" type="type" name=" Name"/> 
                        </div>
                        <div class="col-md-6">
                           <input class="form_control" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div class="col-md-6">
                           <input class="form_control" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                        </div>
                        <div class="col-md-6">
                           <input class="form_control" placeholder="Address" type="type" name="address"/>                          
                        </div>
                        
                        
                        
                        <div class="col-md-12">
                           <textarea style={{color: "#d0d0cf"}} class="textarea" placeholder="Message" type="type" name="message">message </textarea>
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn">Send Now</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      );
      }
      export default Appointment;