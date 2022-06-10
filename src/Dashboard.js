import React from "react";

const Dashboard = () => {

  return (
    <div>
      <div className="container-fluid pb-3">
        {/* Page heading */}
        <div className="row">
          <div className="col-12 col-lg-6 mt-4 mb-4">
            <h3 className="text-gray-800" style={{ fontSize: "30px" }}>
              <b>Dashboard</b>
            </h3>
          </div>
        </div>

      {/* Create a task list table */}
        <div className='row form-group'>
          <div className='col-sm-10'>
            <h3>Projet Task List Table</h3>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Estimated duration</th>
                  <th>Final time</th>
                  <th>Status for completed</th>
                  <th>Comment</th>
                  <th>Reply</th>
                  <th>QAt</th>
                  <th>Code quality</th>
                  <th>Approved by client</th>
                  <th>Developer name</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody id='new_user_data'>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td className="text-center"><input type="checkbox"/></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
