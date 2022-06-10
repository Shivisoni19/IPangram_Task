import React, { useState } from 'react'
import moment from 'moment'
import { useNavigate, useLocation } from 'react-router-dom'

const AddProject = (props) => {
  const [requirments, setRequirments] = useState('')
  const [startdate, setstartDate] = useState('')
  const [enddate, setEnddate] = useState('')
  const [doucuments, setDoucuments] = useState('')
  const navigate = useNavigate()
  const location = useLocation();

  const onStartChangeDate = date => {
    const newDate = setstartDate(
      moment(new Date(date.target.value)).format('YYYY-MM-DD')
    )
    setstartDate(newDate)
    console.log(newDate)
  }

  const onEndChangeDate = date => {
    const newDate = setEnddate(
      moment(new Date(date.target.value)).format('YYYY-MM-DD')
    )
    setEnddate(newDate)
    console.log(newDate)
  }
  console.log(location);

  const handleSubmit = () => {
    const project = {
      requirments: requirments,
      startdate: startdate,
      enddate: enddate,
      doucuments: doucuments,
      usertype: location.state.usertype
    }
    navigate('/projectlist', {
      state: {project: project} 
    })
  }

  return (
    <div>
      <div className='container ml-3'>
        <div className='d-sm-flex offset-4 text-center mb-4'>
          <h1 className='h3 mb-0 text-gray-800'>Add Project (by mentor)</h1>
        </div>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4'>
            <label>Requirements with timeline</label>
            <input type='hidden' />
            <input
              type='text'
              id='new_id'
              autoComplete='off'
              name='newprojectname'
              required
              onChange={e => setRequirments(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4 mt-2'>
            Start Date:{' '}
            <input
              type='date'
              id='date'
              name='date'
              value='start date'
              className='text-gray-600 border-radius p-1 calender-mobile-view'
              onChange={e => onStartChangeDate(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4 mt-3'>
            End Date:{' '}
            <input
              type='date'
              id='date'
              name='date'
              value='end date'
              className='text-gray-600 border-radius p-1 calender-mobile-view'
              onChange={e => onEndChangeDate(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4 mt-3'>
            Other Documents:
            <input
              type='file'
              className='text-gray-600 border-radius p-1 calender-mobile-view'
              onChange={e => setDoucuments(e.target.value)}
            />
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4 mt-3'>
            <button className='btn btn-primary w-25'>
              <i class='fa fa-plus'></i>
            </button>
          </div>
        </div> */}
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4 mt-2'>
          <button className='btn btn-primary w-25 '>
              <i class='fa fa-plus'></i>
            </button>
            <button className='btn btn-danger w-25 offset-6'>
              <i class='fa fa-minus'></i>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'></div>
          <div className='offset-1 col-md-4'>
            <input
              type='submit'
              value='Add Project'
              className='btn btn-success w-50 mt-3'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProject
