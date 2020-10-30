import React,{Component} from 'react'
import '../Styles.css'
import Photo2 from '../assets/UI-face-1.jpg'
import Photo3 from '../assets/UI-face-2.jpg'
import Photo4 from '../assets/UI-face-3.jpg'
import Photo5 from '../assets/UI-face-4.jpg'
import Photo6 from '../assets/UI-face-5.jpg'
class Carousel extends Component {
    render() { 
        return ( 
            // Card1
            <div className='hide'>
            <div className='container text- p-0 space'>
                <h1 className='text-dark'>What Our Reader Say About Us</h1>
                <p className='text-secondary'>fkuebf ihfhiuha kuhfnsh  ofo joiajfo p</p>
            </div>
            <div className='team row space'>
                <div className='col-md-4 col-sm-12'>
                    <div className='card d-inline-block shadow-lg mr-2'>
                        <div className='card-img-top'>
                            <img className='img-fluid border-radiuss ' src={Photo2} alt='People'></img>
                        </div>
                        <div className='card-body'>
                            <h3 className='card-title'>Dikshit</h3>
                            <p className='card-text'>hafkfkaha hskafkbbakk huhakb haf huhaiiah
                            jioashfkkscjhaofhisifh j oiahhihfahihhiii
                            kfhkuahfkukhaaih akhuhafkfhkhakhk akhfkuhh</p>
                            <a href='#' className='btn btn-dark px-5 py-2 mb-0'>Go SomeWhere</a>
                            <p className='text-black-50'>CEO at Google</p>
                        </div>
                    </div>
                </div>
                {/* carousel  starts*/}
                <div className='col-md-4 col-sm-12'>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <div className='card d-inline-block shadow-lg mr-2'>
                                                    <div className='card-img-top'>
                                                        <img className='img-fluid border-radiuss' src={Photo3} alt='People'></img>
                                                    </div>
                                                    <div className='card-body'>
                                                        <h3 className='card-title'>Vensile</h3>
                                                        <p className='card-mute'>hafkfkaha hskafkbbakk huhakb haf huhaiiah
                                                        jioashfkkscjhaofhisifh j oiahhihfahihhiii
                                                        kfhkuahfkukhaaih akhuhafkfhkhakhk akhfkuhh</p>
                                                        <a href='#' className='btn btn-dark px-5 py-2 mb-0'>Go SomeWhere</a>
                                                        <p className='text-black-50'>CEO at Google</p>
                                                    </div>
                                                </div>
                                </div>
    <div class="carousel-item">
                    <div className='card d-inline-block shadow-lg mr-2'>
                                        <div className='card-img-top'>
                                            <img className='img-fluid rounded-circle w-50 ' src={Photo4} alt='People'></img>
                                        </div>
                                        <div className='card-body'>
                                            <h3 className='card-title'>Mash</h3>
                                            <p className='card-text'>hafkfkaha hskafkbbakk huhakb haf huhaiiah
                                            jioashfkkscjhaofhisifh j oiahhihfahihhiii
                                            kfhkuahfkukhaaih akhuhafkfhkhakhk akhfkuhh</p>
                                            <a href='#' className='btn btn-dark px-5 py-2 mb-0'>Go SomeWhere</a>
                                            <p className='text-black-50'>CEO at Google</p>
                                        </div>
                                    </div>
                    </div>
    <div class="carousel-item">
                <div className='card d-inline-block shadow-lg mr-2'>
                                    <div className='card-img-top'>
                                        <img className='img-fluid  border-radiuss' src={Photo5} alt='People'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h3 className='card-title'>Steve</h3>
                                        <p className='card-text'>hafkfkaha hskafkbbakk huhakb haf huhaiiah
                                        jioashfkkscjhaofhisifh j oiahhihfahihhiii
                                        kfhkuahfkukhaaih akhuhafkfhkhakhk akhfkuhh</p>
                                        <a href='#' className='btn btn-dark px-5 py-2 mb-0'>Go SomeWhere</a>
                                        <p className='text-black-50'>CEO at Google</p>
                                    </div>
                                </div>
    </div>
  </div>
</div> 
{/* carousel ends  */}
                </div>
                <div className='col-md-4 col-sm-12'>
                <div className='card d-inline-block shadow-lg mr-2'>
                        <div className='card-img-top'>
                            <img className='img-fluid  rounded-circle w-50 ' src={Photo6} alt='People'></img>
                        </div>
                        <div className='card-body'>
                            <h3 className='card-title'>Kelly</h3>
                            <p className='card-text'>hafkfkaha hskafkbbakk huhakb haf huhaiiah
                            jioashfkkscjhaofhisifh j oiahhihfahihhiii
                            kfhkuahfkukhaaih akhuhafkfhkhakhk akhfkuhh</p>
                            <a href='#' className='btn btn-dark px-5 py-2 mb-0'>Go SomeWhere</a>
                            <p className='text-black-50'>CEO at Google</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Carousel;