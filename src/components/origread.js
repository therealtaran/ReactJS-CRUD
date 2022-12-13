import React,{useEffect,useState} from 'react'
import { Icon, Menu, Table, Button, TableRow } from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {getPosts} from './api/axios'
import SearchBar from './searchBar'

function Read() {
    let navigate=useNavigate()
    const [ApiData,setApiData]=useState([])
    useEffect(()=>{
        axios.get(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD`)
        .then((getData)=>{
            setApiData(getData.data)
        })
    },[])

    const setData=(id,firstName,lastName)=>{
            localStorage.setItem('ID',id)
            localStorage.setItem('firstName', firstName)
            localStorage.setItem('lastName',lastName)
    }

    //below function defined to get back updated data after delete operation is performed
    const getData=()=>{
        axios.get(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD`)
        .then((getData)=>{
            setApiData(getData.data)
        })
    }

    const onDelete=(id)=>{
            axios.delete(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD/${id}`)
            .then(()=>{
                getData()
            })
    }

    //searchbar implementation
    const [posts,setPosts]=useState([])
    const [searchResults,setSearchResults]=useState([])

    useEffect(()=>{
      getPosts().then(json=>{
        setPosts(json)
        
        setSearchResults(json)
      })//setPosts and setSearchResults will be same at first
    },[])
    //dependence array is empty as this happens only in load-time
    

    /*useEffect(()=>{
      getData().then(json=>{
        setPosts(json)
        
        setSearchResults(json)
      })//setPosts and setSearchResults will be same at first
    },[])
    //dependence array is empty as this happens only in load-time
    */

    searchResults=ApiData
  return (
    <div>
      <SearchBar
      posts={posts}
      setSearchResults={setSearchResults}
      />
      <Table>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Modify/Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {searchResults.map((data)=>{
            return(
                <Table.Row>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>
                    <Link to='/update'>
                        <Button color='instagram' onClick={()=>setData(data.id,data.firstName,data.lastName)}>
                            Update
                        </Button>
                    </Link>
                    </Table.Cell>
                    <Table.Cell>
                        <Button color='red' onClick={()=>onDelete(data.id)}>
                            Delete
                        </Button>
                    </Table.Cell>
                </Table.Row>

            )
        })}
        <TableRow><Button color='blue' onClick={()=>{navigate('/')}}>+</Button></TableRow>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </div>
  )
}

export default Read


