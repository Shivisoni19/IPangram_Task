import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ProjectList = () => {
  const location = useLocation();
  console.log("projectlist",location);
  return (
    <>
    {/* List Project After Login  */}
     <div className='row form-group'>
          <div className='col-sm-10'>
            <h3>Projetc List Details</h3>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Project Requirements</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Documents</th>
                </tr>
              </thead>
              <tbody id='new_user_data'>
                <tr>
                  <td>{location.state.project.requirments}</td>
                  <td>{location.state.project.startdate}</td>
                  <td>{location.state.project.enddate}</td>
                  <td>
                    <img src={location.state.project.documents} alt="" className='img-fluid' style={{width:"100px", height:"100px"}}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
    </>
  )
}

export default ProjectList
