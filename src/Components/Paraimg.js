import React,{Component} from 'react'
import '../Styles.css'
import Praypic from '../assets/logo192.png'
class Paraimg extends Component {
    render() { 
        return ( 
         <div className='outer'>
            <div className='container text-center '>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='pray'>
                            <img  className='img-fluid' src={Praypic} alt=''></img>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 fluid'>
                        
                        <div className='panel-fluid text-left '>
                            <h1>DIKSHIT</h1>
                            <p className='pt-4'>
                                fgaghgkufauygd haugugahulsg  ggaskzufgygdkgav   haufhuygkdfv  guygfukadgsjbfuys   ugdkusydfug
                            </p>
                            <p>
                                ksbdcmsdv jbv,jahbdvj dsjgsbvjgabvjbsdgvbjsdbvgk g sdvku    sv
                                jvgsdjvsvsfguysjfbjsdgvjsdbhsagdjvuamvs
                                sfjsgjfbjsdjcbjsdgcsdb
                                dcgjabgvjg
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
         );
    }
}
 
export default Paraimg;