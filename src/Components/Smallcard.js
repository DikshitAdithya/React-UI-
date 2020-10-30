import React,{Component} from 'react';
import '../Styles.css'
class Smallcard extends Component {
    render() { 
        return ( 
            <div>
                <div className='container-fluid p-0'>
                    <div className='cover'>
                        <div className='content text-center'>
                            <h1 className='h1type'>Some amazing stuff</h1>
                            <p className='h1type1'>
                                cdsbvsdjhvcsavjhcjasbjbv hsafcjyas 
                                sagjcgsagchavsjcv?
                            </p>
                        </div>
                    </div>
            </div>   
            <div className='makeit'>    
                    <div className='container-fluid text-center '>
                        <div className='numbers d-flex flex-md-row flex-wrap justify-content-center'>
                            <div className='rect'>
                                <h1 className='mystyle'>1234</h1>
                                <p>happy morning</p>
                            </div>
                            <div className='rect'>  
                                <h1 className='mystyle'>1234</h1>
                                <p>happy morning</p>
                            </div>
                            <div className='rect'>
                                <h1 className='mystyle'>1234</h1>
                                <p>happy morning</p>
                            </div>
                            <div className='rect'>
                                <h1 className='mystyle'>1234</h1>
                                <p>happy morning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Smallcard;