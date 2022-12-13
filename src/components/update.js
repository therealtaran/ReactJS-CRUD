import React,{useState,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Update() {
    let navigate=useNavigate()
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [ID,setID]=useState(null)
    const sendDatatoAPI=()=>{
        axios.put(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD/${ID}`,{
            firstName,
            lastName
        }).then(()=>{        //used to navigate to read page after clicking update
            navigate('/read')
        })
    }

    useEffect(()=>{
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setID(localStorage.getItem('ID'))
    },[])
  return (
    <div>
        <h1>Update</h1>
        <p>Make the changes</p>
      <Form>
            <Form.Field>
                <label>First Name</label>
                <input name='fname' 
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input name='lname' 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder='Last Name' />
            </Form.Field>
            <Button onClick={sendDatatoAPI} type='submit'>Update</Button>
        </Form>
    </div>
  )
}

export default Update
