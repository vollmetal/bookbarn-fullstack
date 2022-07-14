import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from 'react'


function BaseLayout (props) {

    const [userState, setUserState] = useState({username: ''})

    return (
        <div className="App">
        <Header userState={userState}/>
        {props.children}
        <Footer />
      </div>
    )
}

export default BaseLayout;