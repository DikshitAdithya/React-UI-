import React,{Component} from 'react'
import '../Styles.css'
class Footer extends Component {
    render() { 
        return ( 
            <div className='container-fluid p-0 hide'>
                <div className='row footer'>
                    <div className='col-md-5 col-sm-12'>
                        <h3 className='text'>About us</h3>
                        <p className=' text-muted'>DK Creation</p>
                        <p className='pt-4 text-light'>
                            copyright@<span>DikshitAdi</span>
                        </p>
                    </div>
                    <div className='col-md-5 col-sm-12'>
                        <h3>Stay Updated</h3>
                        <p className='pt-4 text-muted'> stay connected</p>
                    </div>
                    <div className='col-md-2 col-sm-12'>
                        
                            <h3 className='px-5 py-5'>Connect Us With <p className='text-muted'>Social Media</p></h3>
                            <div className='col'>
                            <i class="fa fa-facebook fa-4x" aria-hidden="true"></i>
                            <i class="fa fa-twitter fa-4x" aria-hidden="true"></i>
                            <i class="fa fa-instagram fa-4x" aria-hidden="true"></i>
                            </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;