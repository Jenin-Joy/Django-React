import React, { useEffect, useState } from 'react'
import axios from 'axios'
const User = () => {
    const [user, setuser] = useState([])

    const getuser = () => {
        axios.get("http://127.0.0.1:8000/Admin/user/").then((response) => {
            console.log(response.data);
            setuser(response.data)
        })
    }

    useEffect(() => {
        getuser()
    },[])
  return (
    <div className='page'>
        <table className='table' id='tab'>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Email</td>
                <td>Address</td>
                <td>District</td>
                <td>Place</td>
                <td>Photo</td>
            </tr>
            {user.map((user, index) =>(
                <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.user_name}</td>
                    <td>{user.user_contact}</td>
                    <td>{user.user_email}</td>
                    <td>{user.user_address}</td>
                    <td>{user.place.district.district_name}</td>
                    <td>{user.place.place_name}</td>
                    <td><a href={`http://127.0.0.1:8000/${user.user_photo}`}><img src={`http://127.0.0.1:8000/${user.user_photo}`} style={{ width: '100px', height: '100px' }} /></a></td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default User