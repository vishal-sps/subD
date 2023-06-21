import React, { useEffect, useState } from 'react'
import { getSubdomain, subDomain } from '../utlis/helper'
import axios from 'axios'
import { dbUrl } from '../api'

const Home = () => {

  const subdomain = subDomain()
  const [userDetail, setUserDetail] = useState({})
  const deleteUser = async(id)=>{
    return await axios.delete(`${dbUrl}${id}`)
}

  const getDetail = async()=>{
    const data = await axios.get(dbUrl);
    let user = data?.data?.find((user)=>user.subdomain === subdomain)
    if(user){
      setUserDetail(user)
    }
    
  }

  console.log({userDetail});

  useEffect(()=>{
   getDetail()
  },[])

  const handleLogout = ()=>{
    deleteUser(userDetail.id).then((res)=>{
      if(typeof window !== undefined){
        window.location.assign("http://localhost:3000")
      }
    })
  }



  return (
    <div>
      <div>Home </div>

      <p>{userDetail?.companyName}</p>
      <p>can hit api with {`http://${userDetail.subdomain}.com/api/`}</p>

      <button onClick={handleLogout}>Delete User</button>
    </div>
  )
}

export default Home