import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const User_Registration = () => {
  const [getdis, setgetdis] = useState([])
  const [getplace, setgetplace] = useState([])

  const [name, setname] = useState('')
  const [contact, setcontact] = useState('')
  const [email, setemail] = useState('')
  const [address, setaddress] = useState('')
  const [password, setpassword] = useState('')
  const [photo, setphoto] = useState(null)
  const [place, setplace] = useState('')

  const photoinput = useRef(null)
  const disinput = useRef(null)

  const district = () => {
    axios.get("http://127.0.0.1:8000/Admin/district/").then((response) => {
      // console.log(response.data);
      setgetdis(response.data)
    })
  }

  const ajaxplace = (id) => {
    axios.get("http://127.0.0.1:8000/Guest/ajaxplace/" + id).then((response) => {
      // console.log(response.data);
      setgetplace(response.data)
    })
  }

  const userregistration = () => {
    const formdata = new FormData();
    formdata.append("user_name", name)
    formdata.append("user_contact", contact)
    formdata.append("user_email", email)
    formdata.append("user_address", address)
    formdata.append("user_password", password)
    formdata.append("user_photo", photo)
    formdata.append("place", place)
    axios.post("http://127.0.0.1:8000/Guest/user/", formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    ).then((response) => {
      alert(response.data.msg)
      setname('')
      setcontact('')
      setemail('')
      setaddress('')
      setpassword('')
      setplace('')
      photoinput.current.value = ''
      disinput.current.value = ''
    })
  }

  useEffect(() => {
    district()
  }, [])
  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td><input type="text" name="name" id="name" value={name} onChange={(n) => setname(n.target.value)} /></td>
        </tr>
        <tr>
          <td>Contact</td>
          <td><input type="text" name="contact" id="contact" value={contact} onChange={(c) => setcontact(c.target.value)} /></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="email" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Address</td>
          <td><textarea name="add" id="add" value={address} onChange={(a) => setaddress(a.target.value)} cols="20" rows="5"></textarea></td>
        </tr>
        <tr>
          <td>Photo</td>
          <td><input type="file" name="photo" id="photo" ref={photoinput} onChange={(p) => setphoto(p.target.files[0])} /></td>
        </tr>
        <tr>
          <td>District</td>
          <td>
            <select name="district" id="district" ref={disinput} onChange={(d) => ajaxplace(d.target.value)}>
              <option value="">...Select...</option>
              {getdis.map((district) => (
                <option value={district.id} key={district.id}>{district.district_name}</option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>Place</td>
          <td>
            <select name="place" id="place" value={place} onChange={(pl) => setplace(pl.target.value)}>
              <option value="">...Select...</option>
              {getplace.map((place) => (
                <option value={place.id} key={place.id}>{place.place_name}</option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type="password" name="password" value={password} id="password" onChange={(ps) => setpassword(ps.target.value)} /></td>
        </tr>
        <tr>
          <td><button onClick={userregistration}>Register</button></td>
        </tr>
      </table>
    </div>
  )
}

export default User_Registration