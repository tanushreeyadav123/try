function Footer()
{
     return(
          <>
          <div className="footer">
         <div className="f1">
          <h3>ADDRESS</h3>
          <ul>
               <li><i class="fa-solid fa-location-dot"></i> 123 Main Street, EVE town, INDIA </li>
               <li><i class="fa-solid fa-phone"></i> +750665866</li>
               <li><i class="fa-solid fa-envelope"></i> eascatsy@gmail.com</li>
               <li className="logo"><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i></li>
          </ul>
         </div>
         <div className="f1">
          <h3>SERVICE</h3>
          <li><i class="fa-solid fa-caret-right"></i>Work in the field</li>
          <li><i class="fa-solid fa-caret-right"></i>Administrative Work</li>
          <li><i class="fa-solid fa-caret-right"></i>	Bid & Proposal work</li>
          <li><i class="fa-solid fa-caret-right"></i>Administration</li>
          <li><i class="fa-solid fa-caret-right"></i>Preparing documentation</li>
         </div>
         <div className="f1">
          <h3>QUICK LINK</h3>
          <li><i class="fa-solid fa-caret-right"></i>term and conditions</li>
          <li><i class="fa-solid fa-caret-right"></i>Service</li>
          <li><i class="fa-solid fa-caret-right"></i>Circular</li>
          <li><i class="fa-solid fa-caret-right"></i>Serice</li>
          <li><i class="fa-solid fa-caret-right"></i> documentation</li>
         </div>
         <div className="f1">
          <h3>NEWSLETTER</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="f1_div">
              <form action="">
               <input type="email" name="" id="" />
              {/* <span> <input type="submit" value="" /> SignUp</span> */}
              <span>SignUp</span>
              </form>
          </div>
         </div>
         </div>
          </>
     )
}
export default Footer