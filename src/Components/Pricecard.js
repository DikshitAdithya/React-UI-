import React,{Component} from 'react';
import '../Styles.css'
class Pricecard extends Component {
    render() { 
        return ( 
            <div className="purchase text-center">
                <h1>Purchase Anything </h1>
                <p>bakjcbb   hkbckbk   akjbcbb</p>
                <div className='cards'>
                    <div className='d-flex flex-row flex-wrap justify-content-center'>
                    {/* Card-1 */}
                        <div className='card'>
                            <div className='card-body'>
                                <div className='title'>
                                    <h5 className='card-title'>
                                            PDF                        
                                    </h5>
                                    <p className='card-text'>
                                            good quality with good support    
                                    </p>
                                    <div className='pricing'>
                                            <h1>$9.99</h1>
                                            <a href='#' className='btn btn-dark px-5 py-2 mg-5'>Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card-2 */}
                        <div className='card'>
                            <div className='card-body'>
                                <div className='title'>
                                    <h5 className='card-title'>
                                            Kindle                        
                                    </h5>
                                    <p className='card-text'>
                                            good quality with good support    
                                    </p>
                                    <div className='pricing'>
                                            <h1>$12.99</h1>
                                            <a href='#' className='btn btn-dark px-5 py-2 mg-5'>Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card-3 */}
                        <div className='card'>
                            <div className='card-body'>
                                <div className='title'>
                                    <h5 className='card-title'>
                                            Hand-on                       
                                    </h5>
                                    <p className='card-text'>
                                            good quality with good support    
                                    </p>
                                    <div className='pricing'>
                                            <h1>$19.99</h1>
                                            <a href='#' className='btn btn-dark px-5 py-2 mg-5'>Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Pricecard;