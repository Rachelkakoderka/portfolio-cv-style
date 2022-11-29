import React from "react";

export default function Menu() {
    return (
            <nav className="menu">
                   
                   <h3 className="menu--header">CONTACT</h3>

              <div className="menu--icons">

                  <a 
                  href="mailto:ale.galach@gmail.com" target="_blank"  
                  className="menu--contact-link">
                    <i className="icon-mail-alt"></i>
                  </a>
          
                  <a 
                  href="https://github.com/Rachelkakoderka" target="_blank" 
                  class="menu--contact-link">
                    <i className="icon-github-squared"></i>
                  </a>

                  <a 
                  href="https://www.linkedin.com/mwlite/in/aleksandra-ga%C5%82ach-b9617a8a" 
                  class="menu--contact-link" 
                  target="_blank">
                    <i className="icon-linkedin-squared"></i>
                  </a>

                  <a 
                  href="https://www.facebook.com/aleksandra.kowalczyk.311" 
                  className="menu--contact-link" 
                  target="_blank">
                    <i className="icon-facebook-squared"></i>
                  </a> 
                
                </div>
                            
            </nav>
    )

}