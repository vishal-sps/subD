import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { dbUrl } from '../api'
import { isDevEnv } from '../utlis/helper'

const Signup = () => {

    const [formData, setFormData] = useState({
        companyName: "",
        subdomain: ""
    })

    const [generatedUrl, setGeneratedUrl] = useState("")

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
         if(typeof window !== undefined){
         let generatedlink = isDevEnv ?  `http://${formData.subdomain}.localhost:3000` : `https://${formData.subdomain}.${window.location.hostname}`
        setGeneratedUrl(generatedlink)
         }
 
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
        <div className='mt-25'>
        {generatedUrl &&  <a href={generatedUrl} target='_blank'> {generatedUrl} </a> }

        </div>
    </div>
    </div>
  )
}

export default Signup