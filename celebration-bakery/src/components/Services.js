import Service from "./Service";
import axios from "axios";
import {useEffect, useState} from 'react';

function Services() {
   const fetchServices = ()=>{
      axios.get("http://localhost:3001/api/services")
      .then((response) => setServices(response.data))
      .catch((e) => console.log(e));
   }
   const [services,setServices] = useState([]);
   useEffect(fetchServices,[]);

   return (<div class="services">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <div class="titlepage text_align_center ">
                  <h2>Our Bakery Services</h2>
               </div>
            </div>
         </div>
         <div class="row">
            {
               services.map(
                  (data) => {
                     return <Service image={data.image} title={data.title} description={data.description} />
                  }
               )
            }
            
         </div>
      </div>
   </div>);
}
export default Services;
