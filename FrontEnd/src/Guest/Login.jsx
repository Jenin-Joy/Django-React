import React from 'react'

const Login = () => {
  return (
    <div>
        <table>
            <tr>
                <td>Email</td>
                <td><input type="text" name="email" id="" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" name="password" id="" /></td>
            </tr>
            <tr>
                <td><button>Login</button></td>
            </tr>
        </table>
    </div>
  )
}

export default Login