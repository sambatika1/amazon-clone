import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {




  return <div className="home">
     <div className="home_container">
         <img
         className="home_img" src="https://m.media-amazon.com/images/I/61FctBouqKL._SX3000_.jpg"/>
         
         <div className="home_row">
     <Product title="Imou 360 Degree WiFi Security Camera " price="89" image ="https://m.media-amazon.com/images/I/61rAIz2KiwL._AC_UL640_QL65_.jpg" rating={5}/>
     <Product title="Stereo Headphones" price="71" image ="https://m.media-amazon.com/images/I/41z4rmo8z6L._AC_UL640_QL65_.jpg" rating={5}/>
   
          
            </div>
             <div className="home_row">
                
                <Product title="Logitech M171 Wireless Mouse" price="41" image ="https://m.media-amazon.com/images/I/51p1FOjU-lL._AC_UL640_QL65_.jpg" rating={5}/>
                <Product title="3Pack Original [Apple MFi Certified]" price="34" image ="https://m.media-amazon.com/images/I/51Jjnd46+6L._AC_UL640_QL65_.jpg" rating={5}/>
                <Product title="Smart Watch Series 5 T500 Full Screen Bluetooth Heart Rate Monitor Compatible with Apple iOS Android Phone (Black)" price="41" image ="https://m.media-amazon.com/images/I/71r1R4Osl-L._AC_UL640_QL65_.jpg" rating={2}/>
                </div>
                <div className="home_row">
                   <Product title="Stylus Pen for iPad with Palm Rejection" price={60} image= "https://m.media-amazon.com/images/I/51Hku-BY8IL._AC_UL640_QL65_.jpg" rating={5}/>
                </div>
                </div>
             </div>
      
         
       

  
}

export default Home;
