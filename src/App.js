import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {subDomain } from './utlis/helper';
import { AppRouter, SignupRouter } from './routes';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { dbUrl } from './api';



function App() {

 const [user, setUser] = useState(false)
 let subdomain = subDomain();
 console.log("subdomain", subdomain);
 const getDetail = async()=>{
  const data = await axios.get(dbUrl)
  let userData = data?.data?.find((user)=>user.subdomain === subdomain)
  if(userData){
    setUser(true)
  }
}


useEffect(()=>{
getDetail()
},[])


 
  return (
    <div className='App'>
      <BrowserRouter>
     {user ? <AppRouter />  :
       <SignupRouter />
      } 
      </BrowserRouter>
    </div>
  );
}

export default App;
