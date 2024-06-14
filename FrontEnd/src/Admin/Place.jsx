import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Place = () => {
  const [getdistrict, setgetdistrict] = useState([])
  const [place, setplace] = useState('')
  const [district, setdistrict] = useState('')
  const [selplace, setselplace] = useState([])
  const [checkplace, setcheckplace] = useState('')

  const getdis = () => {
    axios.get("http://127.0.0.1:8000/Admin/district/").then((response) => {
      // console.log(response.data);
      setgetdistrict(response.data)
    })
  }

  const insertplace = () => {
    const placevalue = {
      "district": district,
      "place_name": place
    }
    // console.log(placevalue);
    if (checkplace) {
      axios.put("http://127.0.0.1:8000/Admin/updateplace/" + checkplace, placevalue).then((response) => {
        alert(response.data.msg)
        setdistrict('')
        setplace('')
        selectplace()
      })
    }
    else {
      axios.post("http://127.0.0.1:8000/Admin/place/", placevalue).then((response) => {
        alert(response.data.msg)
        setdistrict('')
        setplace('')
        selectplace()
      })
    }
  }

  const selectplace = () => {
    axios.get("http://127.0.0.1:8000/Admin/place/").then((response) => {
      // console.log(response.data);
      setselplace(response.data)
    })
  }

  const deleteplace = (id) => {
    axios.delete("http://127.0.0.1:8000/Admin/deleteplace/" + id).then((response) => {
      alert(response.data.msg)
      selectplace()
    })
  }

  const editplace = (id) => {
    axios.get("http://127.0.0.1:8000/Admin/updateplace/" + id).then((response) => {
      setplace(response.data.place_name)
      setdistrict(response.data.district.id)
      setcheckplace(response.data.id)
    })
  }

  useEffect(() => {
    getdis()
    selectplace()
  }, [])
  return (
    <div className='page'>
      <table className='table'>
        <tr>
          <td>District</td>
        </tr>
        <tr>
            <td>
                <select name="dis" id="" className='input box' value={district} onChange={(d) => setdistrict(d.target.value)}>
                    <option value="">...Select...</option>
                    {getdistrict.map((district) =>(
                      <option selected={district.id === district} value={district.id} key={district.id}>{district.district_name}</option>
                    ))}
                </select>
            </td>
        </tr>
        <tr>
            <td>Place</td>
        </tr>
        <tr>
          <td><input type="text" className='input box' value={place} name="place" id="" onChange={(p) => setplace(p.target.value)} /></td>
        </tr>
        <tr>
            <td align='right'><input type="button" className='input btn-con' value="Add" onClick={insertplace} /></td>
        </tr>
      </table>
      <table id='tab' className='table'>
        <tr>
          <td>#</td>
          <td>District</td>
          <td>Place</td>
          <td>Action</td>
        </tr>
        {selplace.map((place, index) => (
          <tr key={place.id}>
            <td>{index + 1}</td>
            <td>{place.district.district_name}</td>
            <td>{place.place_name}</td>
            <td><i class="fa-solid fa-trash delete-button" onClick={() => deleteplace(place.id)}></i> <i class="fa-solid fa-pen-to-square edit-button" onClick={() => editplace(place.id)}></i></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Place