import { addDoc, collection, doc, onSnapshot, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { dp, storage } from '../firebaseConfig';
import uploadicon from '../images/cloud-computing.png'

function UpdateForm(props) {
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    image:"",
    createdAt:Timestamp.now().toDate(),
})

const [progress, setProgress] = useState(0);

const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
}

const [file, setFile] = useState(uploadicon);

const handleImageChange = (e) =>{
    setFormData({...formData, image: e.target.files[0]});
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

const handlePuplish = (e) =>{
    if(!formData.title || !formData.category || !formData.description || !formData.image){
        return;
    }
    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)
    const uploadImage = uploadBytesResumable(storageRef , formData.image)

    uploadImage.on("state_changed",(snapshot)=>{
        const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progressPercent)
    },(err) => {
        console.log("err");
    },() =>{
        setFormData({
            title:"",
            category:"",
            description:"",
            image:"",
        });
        
        setFile(uploadicon)

        getDownloadURL(uploadImage.snapshot.ref)
        .then((url) =>{
           const articleRef = collection(dp, 'Articles');
           addDoc(articleRef, {
            title: formData.title,
            category:formData.category,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
           })
           .then(() => {
             toast("Article Uploaded sucess", {type:"success"});
             setProgress(0);
           })
           .catch(() => {
            toast("Error Uploaded", {type:"error"});
           })
        })
    })
}



// useEffect(() => {
//   console.log(props.currentId)
//   if(props.currentId){
//   console.log(props.articles[0].imageUrl)
//      setFile(props.articles[0].imageUrl)
//      setFormData({
//             title: props.articles[0].title,
//             category:props.articles[0].category,
//             description: props.articles[0].description,
//             createdAt: Timestamp.now().toDate()
//      })    
//   }
// }, [props.currentId, props.articles])


  return (
    <div className='update_form_section'>
        <div className="updatefile_image">
          <label className='update_filed_lable'>Select File
           <input type='file' name='image' className="update_image_field" accept='image/*' onChange={(e) => handleImageChange(e)}/>
          </label>
          <img src={file} style={{width:280}}/>
        </div>
        
        <div className='update_form_field_container'>
          <input className="update_form_field" placeholder='Enter Title' type='text' name='title' value={formData.title} onChange={(e) => handleChange(e)}/>
          <input className="update_form_field" placeholder='Enter Category' type='text' name='category' value={formData.category} onChange={(e) => handleChange(e)}/>
          <input name='description' placeholder='Enter URL' className="update_form_field" value={formData.description} onChange={(e) => handleChange(e)}/>
          <button className="btn_update" onClick={handlePuplish}>Update</button> 
        </div>
    </div>
  )
}

export default UpdateForm