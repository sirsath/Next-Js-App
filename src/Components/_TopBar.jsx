import Link from 'next/link'
import React from 'react'
// import { } from "../src/Components/Rr"
export default function _TopBar() {
  return <>
   <nav class="navbar navbar-expand-lg bg-dark ">
     <div class="container-fluid">
       <a class="navbar-brand text-light" href="#" t>Navbar</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav">
            <Link href="/" className='nav-link text-light'>Home</Link>
            <Link href="/_Info" className='nav-link text-light'>Info</Link>
            <Link href="/xyz" className='nav-link text-light'>xyz</Link>
            <Link href="/xxx/SS" className='nav-link text-light'>SS</Link>
            <Link href="/_shubh"   className='nav-link text-light'>_shubh</Link>
         </div>
       </div>
     </div>
   </nav>
  
  </>
}
