import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./page/Home";



const Router = () =>{
    return(
        <BrowserRouter>
            
            <Routes>
                <Route path="/" exact element={<Home />}/>
            </Routes>
     
        </BrowserRouter>
    )
}
export default Router;