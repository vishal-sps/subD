import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { dbUrl } from '../api'

const Signup = () => {

    console.log("signupPage rendering");

    const [formData, setFormData] = useState({
        companyName: "",
        subdomain: ""
    })

    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value
        setFormData((prev)=> ({
            ...prev, [name]:value
        }))
    }
    
    const postDetail = async(detail)=>{
        return await axios.post(dbUrl, detail)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.companyName !== "" && formData.subdomain !== ""){
         postDetail(formData)
        console.log(`http://${formData.subdomain}.localhost:3000`);
        }
        
    }

  return (
    <div>
        <h1> Signup </h1>
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder='Enter Company Name' />
                <input name="subdomain" value={formData.subdomain} onChange={handleChange} placeholder='Enter Subdomain' />
                <button type='submit'> Submit </button>

            </div>
        </form>
    </div>
    </div>
  )
}

export default Signup