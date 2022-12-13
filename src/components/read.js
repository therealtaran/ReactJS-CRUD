import React,{useEffect,useState,useCallback,useRef} from 'react'
import { Dimmer, Loader, Table, Button, TableRow, Pagination,Search } from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {getPosts} from './api/axios'
import SearchBar from './searchBar'
import _ from "lodash"


function Read() {
    let navigate=useNavigate()
    //const [ApiData,setApiData]=useState([])
    const [posts,setPosts]=useState([])
    const [searchResults,setSearchResults]=useState([])
    useEffect(()=>{
        axios.get(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD`)
        .then((getData)=>{
            setSearchResults(getData.data)
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
            setSearchResults(getData.data)
        })
    }

    const onDelete=(id)=>{
            axios.delete(`https://636cfd2c91576e19e31be059.mockapi.io/CRUD/${id}`)
            .then(()=>{
                getData()
            })
    }

    //searchbar implementation
    
    

    useEffect(()=>{
      getPosts().then(json=>{
        setPosts(json)
        
        setSearchResults(json)
      })//setPosts and setSearchResults will be same at first
    },[])
    //dependence array is empty as this happens only in load-time

    //pagination implementation
    const [currentPage,setCurrentPage]=useState(1)
    let limit=5 //records per page

    const onPageChange=(event,page)=>{
      event.preventDefault()
      setCurrentPage(page.activePage)
    }

    //tried implementing debounce
  /*const [userQuery, setUserQuery] = useState("");
  const delayedQuery = useRef(_.debounce(q => setUserQuery(q), 500), []);
  const onChange = e => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };*/

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
        {searchResults.slice((currentPage-1)*limit,   //splitting the data to 5 records per page
    (currentPage-1)*limit+limit).map((data)=>{
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
        <Table.HeaderCell colSpan='5'>
          <Pagination
          activePage={currentPage}
          totalPages={Math.ceil(searchResults.length / 5)}
          onPageChange={onPageChange}

          />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </div>
  )
}

export default Read