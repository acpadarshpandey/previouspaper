import React from 'react'
import './footer.css';

export default function footer() {
    return ( <div> 
        <footer>
        <div className="footer">
        <div class="container-fluid p-0" className="fnt" style={{margin:"10px"}}>
            <span className="aia" style={{margin:"20px"}}> JBB</span>
        <div class="row text-left">
            <div class="col-md-3 col-sm-12" style={{margin:"10px"}}>
                <h4 className="text-light">Board Exams</h4> <ul> <li>
                    <a className="fnt"href="/" data-click-stream-label="CBSE Class 12">CBSE Class 12</a>
                    </li> <li><a className="fnt"href="/" data-click-stream-label="ICSE Class 10">ICSE Class 10</a>
                    </li> <li><a className="fnt"href="/" data-click-stream-label="ISC Class 12">ISC Class 12</a></li>
                     <li><a className="fnt"href="/" data-click-stream-label="State Board">State Board</a></li></ul>
                    </div>
                     <div class="col-md-3 col-sm-12" style={{margin:"10px"}}><h4 class="text-light">Competitive Exams</h4> <ul><li>
                        <a className="fnt"href="/" data-click-stream-label="JEE MAINS">JEE MAINS</a></li>
                     <li><a className="fnt"href="/" data-click-stream-label="Indian Army">Indian Army</a></li> <li>
                         <a className="fnt"className="fnt"href="/" data-click-stream-label="NDA">NDA</a></li></ul>
                     </div>
                      <div class="col-md-3 col-sm-12" style={{margin:"10px"}}><h4 class="text-light">Quick Links</h4>
                      <ul><li><a className="fnt"href="/" data-click-stream-label="Home">Home</a></li>
                       <li><a className="fnt"href="/"data-click-stream-label="Contact Us">Contact Us</a></li>
                        <li><a className="fnt"href="/" data-click-stream-label="Privacy Policy">Privacy Policy</a></li></ul>
                        </div></div></div>
                         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile-text-center">
                             <p className="fnt">Copyright © 2020 Previous Papers All Right Reserved | Made  in India By JBB</p></div>
         
         </div>
            </footer>
       
    </div>
        
    )
}