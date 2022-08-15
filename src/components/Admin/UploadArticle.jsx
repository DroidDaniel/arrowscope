import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { dp, storage } from '../../firebaseConfig';
import uploadicon from './../../images/cloud-computing.png'
import "./UploadArticle.css"
import AdminNavbar from './AdminNavbar';
import AdminFooter from './AdminFooter';

function UploadArticle() {
    const [formData, setFormData] = useState({
        title:"",
        category:"",
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

    const [error, setError] = useState("")

    const handlePuplish = (e) =>{
        if(!formData.title || !formData.category || !formData.description || !formData.image){
            return setError("Please Enter valid data");
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
            
            setError("")
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

  return (
    <>
    <AdminNavbar/>
    <section className="uploadsection">
      <div className='arrowscope_container'>
      <h2 className="arrowscope_heading_main">UPLOAD NEW WORKS</h2>
     <div className="uploadfile">
        <div className="uploadefile_image">
          <label className='upload_filed_lable'>Select File
           <input type='file' name='image' className="upload_field" accept='image/*' onChange={(e) => handleImageChange(e)}/>
          </label>
          <img src={file} style={{width:180, height:180}}/>
        </div>
        <div className="uploadfile_form">
          <input className="form_field" placeholder='Enter Title' type='text' name='title' value={formData.title} onChange={(e) => handleChange(e)}/>
          <input className="form_field" placeholder='Enter Category' type='text' name='category' value={formData.category} onChange={(e) => handleChange(e)}/>
          <input name='description' placeholder='Enter URL' className="form_field" value={formData.description} onChange={(e) => handleChange(e)}/>
          <button className="btn_puplish" onClick={handlePuplish}>Puplish</button>
          <p className='upload__error'>{error}</p>
          {progress === 0 ? null : (
            <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
          </div>
          )}
        </div>
     </div>
     </div>
    </section>
    <AdminFooter/>
    </>
  )
}

export default UploadArticle