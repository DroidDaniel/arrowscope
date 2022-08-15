import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {dp} from "../../firebaseConfig"
import Navbar from '../Navbar/Navbar'
import "./Portfolio.css"
import Loading from "../.././images/loading.gif"

function Portfolio() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const articleRef = collection(dp, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q,(snapshot)=>{
           const articles = snapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
            }));
            setArticles(articles)
    })
    },[]);
  return (
    <section className='works'>
        <Navbar/>
    <div className='arrowscope_container'>
        <p className='arr__common_title arr__portfolio_title'>Our Crafts</p>
        <div className='works_container'>{
        articles.length === 0 ? (
            <img src={Loading} alt=""/>
        ):(
            articles.map(({id,title,description,imageUrl}) =>(
            <div key={id} className="works_img_wrapper">
                <a href={description} target="_blank" className='works_img_link'>
                 <img className='works_img' src={imageUrl} alt={title} />
                </a>
            </div>
             ))
        )
        }</div></div>
        </section>
  )
}

export default Portfolio