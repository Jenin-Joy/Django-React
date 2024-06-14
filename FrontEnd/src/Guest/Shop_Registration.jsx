import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const Shop_Registration = () => {
  const [district, setdistrict] = useState([])
  const [getplace, setgetplace] = useState([])

  const [name, setname] = useState('')
  const [contact, setcontact] = useState('')
  const [email, setemail] = useState('')
  const [address, setaddress] = useState('')
  const [photo, setphoto] = useState(null)
  const [proof, setproof] = useState(null)
  const [place, setplace] = useState('')
  const [password, setpassword] = useState('')

  const photoinput = useRef(null)
  const proofinput = useRef(null)
  const disinput = useRef(null)

  const seldistrict = () => {
    axios.get("http://127.0.0.1:8000/Admin/district/").then((response) => {
      // console.log(response.data);
      setdistrict(response.data)
    })
  }

  const ajaxplace = (id) => {
    axios.get("http://127.0.0.1:8000/Guest/ajaxplace/" + id).then((response) => {
      // console.log(response.data);
      setgetplace(response.data)
    })
  }

  const shopregistration = () => {
    const formdata = new FormData()
    formdata.append('shop_name', name)
    formdata.append('shop_contact', contact)
    formdata.append('shop_email', email)
    formdata.append('shop_address', address)
    formdata.append('shop_photo', photo)
    formdata.append('shop_proof', proof)
    formdata.append('shop_password', password)
    formdata.append('place', place)
    axios.post("http://127.0.0.1:8000/Guest/shop/", formdata, {
      headers: {
        'Content-Type':'multipart/form-data'
      }
    }).then((response) => {
      // console.log(response.data);
      alert(response.data.msg)
      setname('')
      setcontact('')
      setemail('')
      setaddress('')
      setplace('')
      setpassword('')
      photoinput.current.value = ''
      proofinput.current.value = ''
      disinput.current.value = ''
    })
  }

  useEffect(() => {
    seldistrict()
  },[])
  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td><input type="text" name="name" id="name" value={name} onChange={(name) => setname(name.target.value)} /></td>
        </tr>
        <tr>
          <td>Contact</td>
          <td><input type="text" name="contact" id="contact" value={contact} onChange={(contact) => setcontact(contact.target.value)}  /></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="email" name="email" id="email" value={email} onChange={(email) => setemail(email.target.value)} /></td>
        </tr>
        <tr>
          <td>Address</td>
          <td><textarea name="address" id="address" value={address} onChange={(address) => setaddress(address.target.value)}></textarea></td>
        </tr>
        <tr>
          <td>Photo</td>
          <td><input type="file" name="photo" id="photo" ref={photoinput} onChange={(photo) => setphoto(photo.target.files[0])} /></td>
        </tr>
        <tr>
          <td>Proof</td>
          <td><input type="file" name="proof" id="proof" ref={proofinput} onChange={(proof) => setproof(proof.target.files[0])} /></td>
        </tr>
        <tr>
          <td>District</td>
          <td>
            <select name="district" id="district" ref={disinput} onChange={(d) => ajaxplace(d.target.value)}>
              <option value="">...Select...</option>
              {district.map((district) => (
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
          <td><input type="password" name="password" value={password} onChange={(password) => setpassword(password.target.value)} id="password" /></td>
        </tr>
        <tr>
          <td><button onClick={shopregistration}>Register</button></td>
        </tr>
      </table>
    </div>
  )
}

export default Shop_Registration