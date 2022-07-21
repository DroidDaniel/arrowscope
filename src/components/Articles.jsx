import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {dp} from "../firebaseConfig"

function Articles() {
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
    <div className='arrowscope_container'>
        <div className='works_container'>{
        articles.length === 0 ? (
            <p>No articles</p>
        ):(
            articles.map(({id,title,description,imageUrl}) =>(
            <div key={id} className="works_img_wrapper">
                <a href={description} target="_blank" className='works_img_link'>
                 <img className='works_img' src={imageUrl} alt={title}/>
                </a>
            </div>
             ))
        )
        }</div></div>
        </section>
  )
}

export default Articles