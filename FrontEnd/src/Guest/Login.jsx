import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const login = () => {
        const loginvalue = {
            "email": email,
            "password": password
        }
        axios.post("http://127.0.0.1:8000/Guest/login/", loginvalue).then((response) => {
            // console.log(response.data);
            if (response.data.userid) {
                localStorage.setItem('userid', response.data.userid)
                navigate('../UserHome')
            }
            else if (response.data.shopid) {
                localStorage.setItem('shopid', response.data.shopid)
                navigate('../ShopHome')
            }
            else if (response.data.adminid) {
                localStorage.setItem('adminid', response.data.adminid)
                navigate('../Admin')
            }
            else {
                alert(response.data)
            }
        })
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" name="email" onChange={(email) => setemail(email.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" onChange={(password) => setpassword(password.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><button onClick={login}>Login</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login