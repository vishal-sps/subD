import {Routes, Route} from "react-router-dom"
import AppHome from '../pages/Home';
import Signup from "../pages/Signup";
import About from "../pages/About";



export const AppRouter=()=> {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}


export const SignupRouter = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
    </Routes>
  )
}



