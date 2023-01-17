import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer'
import Users from './components/pages/Users';
import Home from './components/pages/Home'
import {route} from "./Router"
import ShowUsers from './components/pages/ShowUsers';

function App(){
    let views={
        home:<Home/>,
        showusers:<ShowUsers/>,
        createusers:<Users/>
    }

    function users(){
            return views[route];
    }
    return (
        <>
         <Header/>
         {users()}
         <Footer/>
        </>
    )
}

export default App;