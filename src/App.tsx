import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Find} from "./components/Find/Find";
import {Footer} from "./components/Footer/Footer";
import {NavLink, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import {NotFoundPage} from "./components/Navbar/NotFoundPage/NotFoundPage";
import {Settings} from "./components/Navbar/Settings/Settings";


function App() {
    return (
           <div className={'appWrap'}>
               <Header/>
               <Navbar/>
               <Routes>
                       <Route path={'/'} element={<Navbar/>}/>
                       <Route path={'/profile'} element={<Profile/>}/>
                       <Route path={'/dialogs'} element={<Dialogs/>}/>
                       <Route path={'/news'} element={<News/>}/>
                       <Route path={'/music'} element={<Music/>}/>
                       <Route path={'/settings'} element={<Settings/>}/>
               </Routes>
               <Profile/>
               <Find/>
               <Footer/>
           </div>
    );
}
// function App() {
//     return (
//         <BrowserRouter>
//             <div>
//                 <Route path={'/hello'}
//                        render={() => <HelloM message={'HU'}
//                                              addPostC={addPost}
//                                              posts={state.profilePage.posts}
//                        />
//                        }/>
//             </div>
//         </BrowserRouter>
//     );
// }
/*type MessageTYpe = {
    message: string
    posts: Array<PostType>
    addPostC: (postText: string) => void
}
function HelloM(props: MessageTYpe) {
    let Ref = React.createRef<HTMLTextAreaElement>()
    const addP = () => {
        if (Ref.current)
      props.addPostC(Ref.current.value)
    }
    
    return <div>
        {props.message}
        <hr/>
        {props.posts.map(p=><div key={p.id}><b>{p.message}</b></div>)}
        <hr/>
        <textarea ref={Ref}></textarea>
        <button onClick={addP}>d</button>
    </div>
}*/
export default App;