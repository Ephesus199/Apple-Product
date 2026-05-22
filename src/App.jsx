import { BrowserRouter, Route } from "react-router"
import AppLayout from "./Components/AppLayout"
import { Routes } from "react-router"
import Home from "./Components/Home"
import Iphone from "./Components/Iphone"
import Macbook from "./Components/Macbook"
import Watch from "./Components/Watch"
import Imac from "./Components/Imac"
export default function App(){
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<AppLayout />}>
       <Route index element={<Home />}/>
       <Route path="/iphone" element={<Iphone />}/>
       <Route path="/macbook" element={<Macbook />}/>
       <Route path="/watch" element={<Watch />}/>
       <Route path="/imac" element={<Imac />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}