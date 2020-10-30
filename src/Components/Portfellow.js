import React,{Component} from 'react'
import '../Styles.css'
import Headerpic from '../assets/header-img.png'
class Portfellow extends Component {
    render() { 
        return ( 
            <div>
            <div className='container-fluid text-center gradiant overflow'>
                <div className='row '>
                    <div className='col-md-7 col-sm-12 bot'>
                    <h6 className='foncol '>By DIKSHIT ADITHYA</h6>
                        <h1 className='minfont'>I am Looking For</h1>
                        <p className='secondary-text secfont'>
                            The Books are all amazing nsnfjs sfhksnf  hkfdsbbvus biushadufcb
                            hasb jbcyab jbacgbbiub uibacub bihabcbiub biabcib
                        </p>
                        <button className='btn btn-light px-5 py-2 '>
                                Buy Book $5
                        </button>
                    </div>
                    <div className='col-md-5 col-sm-12 h-25 '>
                        <img src={Headerpic} alt='book'></img>
                    </div>
                       
                       
                </div>

            </div>
            </div>
         );
    }
}
 
export default Portfellow;