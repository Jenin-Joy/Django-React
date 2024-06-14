import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Subcategory = () => {
    const [getcategory, setgetcategory] = useState([])
    const [category, setcategory] = useState('')
    const [subcategory, setsubcategory] = useState('')
    const [selsubcategory, setselsubcategory] = useState([])
    const [checksubcat, setchecksubcat] = useState('')

    const getcat = () => {
        axios.get("http://127.0.0.1:8000/Admin/category/").then((response) => {
            // console.log(response.data);
            setgetcategory(response.data)
        })
    }

    const insertSubcategory = () => {
        const categoryvalue = {
            "category": category,
            "subcategory_name": subcategory
        }
        // console.log(categoryvalue);
        if (checksubcat)
            {
                axios.put("http://127.0.0.1:8000/Admin/updatesubcategory/"+checksubcat, categoryvalue).then((response) => {
                    alert(response.data.msg)
                    setsubcategory('')
                    setcategory('')
                    selectsubcategory()
                })
            }
            else
            {
                axios.post("http://127.0.0.1:8000/Admin/subcategory/", categoryvalue).then((response) => {
                    alert(response.data.msg)
                    setsubcategory('')
                    setcategory('')
                    selectsubcategory()
                })
            }
    }

    const selectsubcategory = () => {
        axios.get("http://127.0.0.1:8000/Admin/subcategory/").then((response) => {
            // console.log(response.data);
            setselsubcategory(response.data)
        })
    }

    const deletesubcategory = (id) => {
        axios.delete("http://127.0.0.1:8000/Admin/deletesubcategory/"+id).then((response) => {
            alert(response.data.msg)
            selectsubcategory()
        })
    }

    const editsubcategory = (id) => {
        axios.get("http://127.0.0.1:8000/Admin/updatesubcategory/"+id).then((response) => {
            setsubcategory(response.data.subcategory_name)
            setcategory(response.data.category.id)
            setchecksubcat(response.data.id)
        })
    }

    useEffect(() => {
        getcat()
        selectsubcategory()
    }, [])
  return (
    <div className='page'>
        <table className='table'>
        <tr>
          <td>Category</td>
        </tr>
        <tr>
            <td>
                <select name="dis" id="" className='input box' value={category} onChange={(c) => setcategory(c.target.value)}>
                    <option value="">...Select...</option>
                    {getcategory.map((category) =>(
                        <option selected={category.id === category} value={category.id} key={category.id}>{category.category_name}</option>
                    ))}
                </select>
            </td>
        </tr>
        <tr>
            <td>Subcategory</td>
        </tr>
        <tr>
          <td><input type="text" className='input box'  name="place" id="" value={subcategory} onChange={(s) => setsubcategory(s.target.value)} /></td>
        </tr>
        <tr>
            <td align='right'><input type="button" className='input btn-con' value="Add" onClick={insertSubcategory} /></td>
        </tr>
      </table>
      <table id='tab' className='table'>
        <tr>
            <td>#</td>
            <td>Category</td>
            <td>Subcategory</td>
            <td>Action</td>
        </tr>
        {selsubcategory.map((subcategory, index) => (
            <tr key={subcategory.id}>
                <td>{index + 1}</td>
                <td>{subcategory.category.category_name}</td>
                <td>{subcategory.subcategory_name}</td>
                <td><i class="fa-solid fa-trash delete-button" onClick={() => deletesubcategory(subcategory.id)} ></i> <i class="fa-solid fa-pen-to-square edit-button" onClick={() => editsubcategory(subcategory.id)} ></i></td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default Subcategory