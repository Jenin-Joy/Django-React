import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApprovedShop = () => {
  const [shop,setshop] = useState([])

    const selshop = () => {
        axios.get("http://127.0.0.1:8000/Admin/approvedshop/").then((response) => {
            console.log(response.data);
            setshop(response.data)
        })
    }

    const verify = (id, status) => {
        axios.put("http://127.0.0.1:8000/Admin/verifyshop/"+id + "/" + status).then((response) => {
            alert(response.data.msg)
            selshop()
        })
    }
    useEffect(() => {
        selshop()
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
                <td>Proof</td>
                <td>Action</td>
            </tr>
            {shop.map((shop, index) =>(
                <tr key={shop.id}>
                    <td>{index + 1}</td>
                    <td>{shop.shop_name}</td>
                    <td>{shop.shop_contact}</td>
                    <td>{shop.shop_email}</td>
                    <td>{shop.shop_address}</td>
                    <td>{shop.place.district.district_name}</td>
                    <td>{shop.place.place_name}</td>
                    <td><a href={`http://127.0.0.1:8000/${shop.shop_photo}`}><img src={`http://127.0.0.1:8000/${shop.shop_photo}`} alt="" style={{ width: '70px', height: '100px' }} /></a></td>
                    <td><a href={`http://127.0.0.1:8000/${shop.shop_proof}`}><img src={`http://127.0.0.1:8000/${shop.shop_proof}`} alt="" style={{ width: '70px', height: '100px' }} /></a></td>
                    <td><i class="fa-solid fa-xmark delete-button" onClick={() => verify(shop.id, 2)}></i></td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default ApprovedShop