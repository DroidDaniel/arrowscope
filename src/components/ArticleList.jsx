import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {dp, storage} from "../firebaseConfig"

function ArticleList() {
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

    const handleDelete = async ({id,imageUrl}) => {
      if (window.confirm("Are you sure you want to delete this article?")) {
        try {
          await deleteDoc(doc(dp, "Articles", id));
          toast("Article deleted successfully", { type: "success" });
          const storageRef = ref(storage, imageUrl);
          await deleteObject(storageRef);
        } catch (error) {
          toast("Error deleting article", { type: "error" });
          console.log(error);
        }
      }
    };


    // const handleEdit = async ({id}) => {
    //       console.log(id) 
    //       if(id){
    //         const docRef = doc(dp, "Articles", id);
    //         const docSnap = await getDoc(docRef);
    //        if (docSnap.exists()) {
    //          // console.log("Document data:", docSnap.data());
    //          const docData = docSnap.data()
    //          console.log(docData)
    //        } else {
    //        // doc.data() will be undefined in this case
    //        console.log("No such document!");
    //        }
    //       }
    // }


    

  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Post Image</th>
      <th scope="col">Title</th>
      <th scope="col">Post URL</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
     
            articles.map(({id,title,description,imageUrl}) =>(
            <tr key={id} className="works_img_wrapper">
              <td><img className='works_img' src={imageUrl} alt={title} style={{width:50,height:50}}/></td>
              <td>{title}</td>
              <td><a href={description} target="_blank" className='works_img_link'>{description}</a></td>
              <td>
              <a className="btn text-primary">
                <i className="fas fa-pencil-alt" onClick={ () => handleEdit({id})}>Edit</i>
              </a>
              <a className="btn text-danger" onClick={ () => handleDelete({ id, imageUrl })}>
                  <i className="far fa-trash-alt">Delete</i>
              </a>
              </td>
            </tr>
             ))
        
  
  
  }
  </tbody>
</table>
    </div>
  )
}

export default ArticleList