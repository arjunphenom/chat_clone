import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Chat from "./pages/chat";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;