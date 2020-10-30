import React,{Component} from 'react';

import Headerpic from '../assets/header-img.png'
class Navbar extends Component {
    render() { 
        return ( 
            <div className='container-fliud p-0 gradiant fon box'>
            <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand foncol" href="#">
  <i class="fa fa-book fa-3x" aria-hidden="true"></i>
  Books
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className='fas fa-align-right text-light'></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <div className='mr-auto'></div>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link foncol" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
            <div className='dropdown'>
                <a href='#' className='nav-link foncol'>Features</a>
                <div className='dropdown-content foncol'>
                    <a href='#' className='foncol'>More</a>
                </div>
            </div>
      </li>
      <li className="nav-item">
        <a className="nav-link foncol" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown ">
      <div className='dropdown'>
         <a href='#' className='nav-link foncol'>Pages</a>
        <div className='dropdown-content'>
          <a href='# '>Generic</a>
          <a href='# '>Static</a>
        </div>
     </div>
     
      
        
      </li>
      <li className="nav-item">
        <a className="nav-link foncol" href="#">About Us</a>
      </li>
      
    </ul>
  </div>
</nav>
{/* portfellow */}
<div className='container-fluid text-center gradiant overflow'>
                <div className='row '>
                    <div className='col-md-7 col-sm-12 bot moveup'>
                    <h6 className='foncol coolfont  '>By DIKSHIT ADITHYA</h6>
                        <h1 className='minfonts'>I am Looking For</h1>
                        <p className='secondary-text secfont'>
                            The Books are all amazing nsnfjs sfhksnf  hkfdsbbvus biushadufcb
                            hasb jbcyab jbacgbbiub uibacub bihabcbiub biabcib
                        </p>
                        <button className='btn btn-light px-5 py-2 btnstyle '>
                                Buy Book $5
                        </button>
                    </div>
                    <div className='col-md-5 col-sm-12 h-25 '>
                        <img className='imgsty'src={Headerpic} alt='book'></img>
                    </div>       
                </div>
            </div>
            </div>
         );
    }
}
 
export default Navbar;