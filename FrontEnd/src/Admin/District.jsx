import React, { useEffect, useState } from 'react'
import axios from 'axios'
const District = () => {
  const [district, setdistrict] = useState("")
  const [dis, setdis] = useState([])
  const [checkdis, setcheckdis] = useState("")

  const dist = () => {
    const distvalue = {
      "district_name": district
    }
    // console.log(distvalue);
    if (checkdis)
      {
        axios.put("http://127.0.0.1:8000/Admin/updatedistrict/"+checkdis, distvalue).then((response) => {
          alert(response.data.msg)
          setdistrict('')
          seldistrict()
        })
      }
      else
      {
        axios.post("http://127.0.0.1:8000/Admin/district/", distvalue).then((response) => {
          alert(response.data.msg)
          setdistrict('')
          seldistrict()
        })
      }
  }

  const seldistrict = () => {
    axios.get("http://127.0.0.1:8000/Admin/district/").then((response) => {
      // console.log(response.data);
      setdis(response.data)
    })
  }

  const deletedistrict = (id) => {
    axios.delete("http://127.0.0.1:8000/Admin/deletedistrict/"+id).then((response) => {
      alert(response.data.msg)
      seldistrict()
    })
  }

  const editdistrict = (id) => {
    axios.get("http://127.0.0.1:8000/Admin/updatedistrict/"+id).then((response) => {
      setdistrict(response.data.district_name)
      setcheckdis(response.data.id)

    })
  }

  useEffect(() => {
    seldistrict()
  }, [])
  return (
    <div className='page'>
      <table className='table'>
        <tr>
          <td>District</td>
        </tr>
        <tr>
          <td><input type="text" name="dis" className='input inputcon' id="" value={district} onChange={(d) => setdistrict(d.target.value)} /></td>
        </tr>
        <tr>
          <td align='right'><input className='btn-con input' type="button" value="Add" onClick={dist} /></td>
        </tr>
      </table>
      <table id='tab' className='table'>
        <tr>
          <th>#</th>
          <th>District</th>
          <th>Action</th>
        </tr>
        {dis.map((dist, index) => (
          <tr key={dist.id}>
            <td>{index + 1}</td>
            <td>{dist.district_name}</td>
            <td>
            <i class="fa-solid fa-trash delete-button" onClick={() => deletedistrict(dist.id)}></i> <i class="fa-solid fa-pen-to-square edit-button" onClick={() => editdistrict(dist.id)}></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default District