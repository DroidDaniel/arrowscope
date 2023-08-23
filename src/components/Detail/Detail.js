import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
import products from "../Portfolio/portfolio.json"
import GoToTop from '../Utility/GoToTop'
import "./Detail.css";


function Detail() {
    let {slug} = useParams()

    const product = products.find((p)=> p.slug == slug )

  return (
    <>
    <Navbar/>
    <section className="details_sec" id="arr_details">
        <div className="arrowscope_container">
        <h1 className='deatils_heading'>{product.slug}</h1>
            <div className='book_info'>
            <div className='book_wrapper'>
           <img src={`../${product.imgurl}`} alt='' width="300"/>
           </div>
           <div className='book_description'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='book_mock'>
            <img src={`../${product.bookImg}`} alt='' />
            </div>
            <a href='https://handcbooks.com/' target='_blank' className='buynow_btn'>BUY NOW</a>
            </div>
           </div>
        </div>
    </section>
    <Footer/>
    <GoToTop/>
         </>
  )
}

export default Detail