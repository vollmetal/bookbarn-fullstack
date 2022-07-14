import { useState } from "react";



function Login (props) {
    const [userData, setUserData] = useState({})

    const inputUpdate = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        const sentForm = await fetch('http://localhost:4200/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        const jsonUser = await sentForm.json()
        console.log(jsonUser)
    }

    return (
        <div className="registrationPage">
            <div className="inputField">
                <label className="inputLabel">Email: </label>
                <input onChange={inputUpdate} type='text' name="email"/>
            </div>
            <div className="inputField">
                <label className="inputLabel">Password: </label>
                <input onChange={inputUpdate} type='password' name="password"/>
            </div>
            <button onClick={submitForm}>Login</button>
        </div>
    )
}

export default Login;