import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function _Info() {
     const [DataPrint, setDataPrint] = useState()

     const handelgetInfo =async()=> {
        const {data} = await axios.get("http://localhost:5000/info")
        setDataPrint(data)
     }
      useEffect(() => {
        handelgetInfo()
      }, [])
      
  return  <>
<div className="container">
    <table class="table table-dark table-striped table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
      <tbody>
         {
            DataPrint?.map((item , i) => <tr>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
              </tr>
              )
         }
      </tbody>
    </table>
</div>
  </>
}
