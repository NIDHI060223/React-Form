import React from 'react'
import { useNavigate } from 'react-router-dom';

function Data({formDataList}) {

    const nav = useNavigate();

   const handleBack = () => {
    nav('/');
   }

  return (
    <div className="Data">
      <h1>Form Data</h1>
      <table className="table" border='1'>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Subject</th>
            <th>Resume</th>
            <th>URL</th>
            <th>About</th>
          </tr>
        </thead>

        <tbody> 
            {formDataList.map((formData, index)=>(
                 <tr key={index}>
                 <td>{formData.firstname}</td>
                 <td>{formData.lastname}</td>
                 <td>{formData.email}</td>
                 <td>{formData.contact}</td>
                 <td>{formData.gender}</td>
                 <td>{formData.subject}</td>
                 <td>{formData.resume}</td>
                 <td>{formData.url}</td>
                 <td>{formData.about}</td>
               </tr>
            ))} 
          
        </tbody>
      </table>
    <button type='button' className='back' onClick={handleBack}>Back</button> 
    </div>
  )
}

export default Data
