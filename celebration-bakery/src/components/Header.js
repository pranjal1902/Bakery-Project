function Header(){
    return(<header class="header-area">
<div class="container">
   <div class="row d_flex">
      <div class=" col-md-3 col-sm-3">
         <div class="logo">
            <a href="index.html">CB Bakery</a>
         </div>
      </div>
      <div class="col-md-9 col-sm-9">
         <div class="navbar-area" >
            <nav class="site-navbar">
               <ul>
                  <li><a class="active" href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Service</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact us</a></li>
                  <li class="d_none"><a href="Javascript:void(0)"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                  <li class="d_none"><a href="Javascript:void(0)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
               </ul>
               <button class="nav-toggler">
               <span></span>
               </button>
            </nav>
         </div>
      </div>
   </div>
</div>
</header>
    );
}
export default Header;