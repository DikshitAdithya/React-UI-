import React,{Component} from 'react'
import '../Styles.css'
class Download extends Component {
    render() { 
        return ( 
            <div className='container-fluid p-0 text-center'>
                <div className='row space backcolor'>
                    <div className='col-md-12 col-sm-12' >
                        <h1 className='txt'>Download Our App all Platform</h1>
                    </div>
                </div>
                <div className='row backcolor'> 
                    <div className='col-md-12 col-sm-12 txt'>
                        <p className='txt'>jassdvksdojdskulllvlfd hh a ihviuhalvihuraeihgindf heiurgiuueahghie
                        rhiugleruh uhigushlihsukghkre bcjsancb nlnaclnalkns   khviherugiuhuireghiehugeihieilh 
                       </p>
                    </div>
                </div>
                <div className='platform row backcolor'>
                    <div className='col-md-6 col-sm-12 '>
                        <div className='desktop shadow-lg'>
                            <div className='d-flex flex-row justify-content-center  '>
                            <i class="fa fa-desktop fa-4x py-2 pr-3 " aria-hidden="true"></i>
                            <div className='text '>
                                <h3 className='pt-1 m-0 '>Desktop</h3>
                                <p className='p-0 m-0 smalltxt'>On Website</p>
                            </div>
                            </div> 
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 '>
                        <div className='desktop shadow-lg'>
                            <div className='d-flex flex-row justify-content-center'>
                            <i class="fa fa-android fa-4x py-2 pr-3" aria-hidden="true"></i>
                            <div className='text'>
                                <h3 className='pt-1 m-0 '>Mobile</h3>
                                <p className='p-0 ,m-0'>On Android</p>
                            </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Download;