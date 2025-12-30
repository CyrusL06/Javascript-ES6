//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";
function Footer(){

    const year = new Date;
    const thisYear = year.getFullYear;

    return <footer>
                <p>Copyright</p>
         </footer>
    
}
export default Footer;