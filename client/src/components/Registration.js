import { useState } from "react";



function Registration () {
    const [userData, setUserData] = useState({})

    const inputUpdate = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        const sentForm = await fetch('http://localhost:4200/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }

    return (
        <div className="registrationPage">
            <div className="inputField">
                <label className="inputLabel">Email: </label>
                <input onChange={inputUpdate} type='text' name="email"/>
            </div>
            <div className="inputField">
                <label className="inputLabel">Username: </label>
                <input onChange={inputUpdate} type='text' name="username"/>
            </div>
            <div className="inputField">
                <label className="inputLabel">Password: </label>
                <input onChange={inputUpdate} type='password' name="password"/>
            </div>
            <button onClick={submitForm}>Register</button>
        </div>
    )
}

export default Registration;