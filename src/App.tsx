import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Navbar/Profile/Profile";
import {News} from "./components/Navbar/News/News";
import {Friends} from "./components/Navbar/Friends/Friends";
import {Music} from "./components/Navbar/Music/Music";
import {Settings} from "./components/Navbar/Settings/Settings";
import {Ava} from "./components/Ava/Ava";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";

const App: React.FC = () => {

    return (
        <BrowserRouter>
           <div className={'app-wrapper'}>
               <Header/>
               <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/dialogs"} element={ <DialogsContainer/>}/>
                        <Route path={"/news"} element={<News/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/settings"} element={ <Settings/>}/>
                        <Route path={'/friends'} element={<Friends
                        />}/>
                    </Routes>
                </div>
               <Ava/>
               <Footer/>
           </div>
        </BrowserRouter>
    );
}
export default App;