import React,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Create() {
    let navigate=useNavigate()
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    console.log(firstName)
    console.log(lastName)
    const sendDatatoAPI=()=>{
        axios.post(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD`,{
            firstName,
            lastName
        }).then(()=>{        //used to navigate to read page after clicking create
            navigate('/read')
        })
    }
  return (
    <div>
        <p>Make an entry</p>
      <Form>
            <Form.Field>
                <label>First Name</label>
                <input name='fname' 
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input name='lname' 
                onChange={(e)=>setLastName(e.target.value)}
                placeholder='Last Name' />
            </Form.Field>
            <Button onClick={sendDatatoAPI} type='submit'>Submit</Button>
        </Form>
    </div>
  )
}

export default Create
