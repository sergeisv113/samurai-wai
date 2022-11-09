import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import { Route, Routes} from "react-router-dom";
import {Profile} from "./components/Navbar/Profile/Profile";
import {News} from "./components/Navbar/News/News";
import {Users} from "./components/Navbar/Users/Users";
import {Music} from "./components/Navbar/Music/Music";
import {Settings} from "./components/Navbar/Settings/Settings";
import {Ava} from "./components/Ava/Ava";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Navbar/Users/UsersContainer";

const App: React.FC = () => {

    return (
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
                        <Route path={'/users'} element={<UsersContainer/>}/>
                    </Routes>
                </div>
               <Ava/>
               <Footer/>
           </div>
    );
}
export default App;