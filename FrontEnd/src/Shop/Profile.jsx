import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Profile = () => {
    const shopid = localStorage.getItem('shopid')

    const [name, setname] = useState('')
    const [contact, setcontact] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    // console.log(shopid);
    const profile = () => {
        axios.get("http://127.0.0.1:8000/Shop/profile/"+shopid).then((response) => {
            // console.log(response.data);
            setname(response.data.shop_name)
            setcontact(response.data.shop_contact)
            setemail(response.data.shop_email)
            setaddress(response.data.shop_address)
        })
    }

    useEffect(() => {
        profile()
    },[])
  return (
    <div>
        <table>
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Contact</td>
                <td>{contact}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>{address}</td>
            </tr>
            <tr>
                <td colSpan={2} align='center'><Link>Edit Profile</Link> <Link>Change Password</Link></td>
            </tr>
        </table>
    </div>
  )
}

export default Profile