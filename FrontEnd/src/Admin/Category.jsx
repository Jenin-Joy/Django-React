import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Category = () => {
  const [category, setcategory] = useState("")
  const [cat, setcat] = useState([])
  const [checkcat, setcheckcat] = useState('')

  const insertCategory = () => {
    const categoryvalue = {
      "category_name": category
    }
    // console.log(categoryvalue);
    if (checkcat) {
      axios.put("http://127.0.0.1:8000/Admin/updatecategory/" + checkcat, categoryvalue).then((response) => {
        alert(response.data.msg)
        selectcategory()
        setcategory('')
      })
    }
    else {
      axios.post("http://127.0.0.1:8000/Admin/category/", categoryvalue).then((response) => {
        alert(response.data.msg)
        selectcategory()
        setcategory('')
      })
    }
  }

  const selectcategory = () => {
    axios.get("http://127.0.0.1:8000/Admin/category/").then((response) => {
      // console.log(response.data);
      setcat(response.data)

    })
  }

  const deletecategory = (id) => {
    axios.delete("http://127.0.0.1:8000/Admin/deletecategory/" + id).then((response) => {
      alert(response.data.msg)
      selectcategory()
    })
  }

  const updatecategory = (id) => {
    axios.get("http://127.0.0.1:8000/Admin/updatecategory/" + id).then((response) => {
      setcategory(response.data.category_name)
      setcheckcat(response.data.id)

    })
  }

  useEffect(() => {
    selectcategory()
  }, [])
  return (
    <div className='page'>
      <table className='table'>
        <tr>
          <td>Category</td>
        </tr>
        <tr>
          <td><input type="text" name="dis" className='input inputcon' id="" value={category} onChange={(c) => setcategory(c.target.value)} /></td>
        </tr>
        <tr>
          <td align='right'><input className='btn-con input' type="button" value="Add" onClick={insertCategory} /></td>
        </tr>
      </table>
      <table id='tab' className='table'>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {cat.map((category, index) => (
          <tr key={category.id}>
            <td>{index + 1}</td>
            <td>{category.category_name}</td>
            <td><i class="fa-solid fa-trash delete-button" onClick={() => deletecategory(category.id)}></i> <i class="fa-solid fa-pen-to-square edit-button" onClick={() => updatecategory(category.id)}></i></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Category