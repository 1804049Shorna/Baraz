import React from 'react'
import './FlashSale.css'
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import f4 from '../../images/f4.jpg'
import f5 from '../../images/f5.jpg'
import f6 from '../../images/f6.jpg'

const FlashSale = () => {
  return (
    <div className='container '>
        <p className='py-3'>FLASH SALE</p>
        <div className='d-flex flex-wrap flashsale-container'>

            <div className='col-lg-2 col-md-4 col-sm-6 container p-2'>
                <img src={f1}className="img-fluid" alt="" />

                <p  className='title my-2'>Earbud Vivo</p>
                <h6 className='price' >Price: 50 tk</h6>


            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 container p-2 '>
                <img src={f2}className="img-fluid" alt="" />
                <p className='title my-2'>Earbud Vivo</p>
                <h6 className='price'>Price: 50 tk</h6>



            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 container p-2 '>
                <img src={f3}className="img-fluid" alt="" />
               
                <p className='title my-2'>Earbud Vivo</p>
                <h6 className='price'>Price: 50 tk</h6>


            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 container p-2 '>
                <img src={f4}className="img-fluid" alt="" />
                <p className='title my-2'>Earbud Vivo</p>
                <h6 className='price'>Price: 50 tk</h6>

         </div>
            <div className='col-lg-2 col-md-4 col-sm-6 container p-2 '>
                <img src={f5}className="img-fluid" alt="" />
                <p className='title  my-2'>Earbud Vivo</p>
                <h6 className='price'>Price: 50 tk</h6>


            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 container p-2 '>
                <img src={f6}className="img-fluid" alt="" />
                <p className='title my-2'>Earbud Vivo</p>
                <h6 className='price'>Price: 50 tk</h6>


            </div>


        </div>
    </div>
  )
}

export default FlashSale