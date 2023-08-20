import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Review from "./component/review";
import Footer from "./component/footer";
import Navbar from "./component/Navbar";

function App(){
    return(
    <div className="app">
        <Navbar/>
        <Header/>
        <Body/>
        <Service/>
        <Review/>
        <Contact/>
        <Footer/>
    </div>
    )
}

export default App;