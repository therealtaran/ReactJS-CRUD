import React, {useState,useCallback} from 'react'
import { Search } from 'semantic-ui-react'
import _ from "lodash"

    const SearchBar = ({posts, setSearchResults}) => { //receives posts and set.. from read.js
    /*const [query,setQuery]=useState("")
    const sendQuery = query => setQuery(query)
    const delayedQuery = useCallback(_.debounce(q => sendQuery(q), 500), []);
    const onChange = e => {
      setQuery(e.target.value);
      delayedQuery(e.target.value);{
      if(!query.toLowerCase()) return setSearchResults(posts)

        //returns boolean, if input is present, that is included in resultarray
        const resultsArray=posts.filter(post=>(post.firstName.toLowerCase().includes(query.toLowerCase()))
        || (post.lastName.toLowerCase().includes(query.toLowerCase())))

        setSearchResults(resultsArray)
    }*/

    const handleSearchChange=(e)=>{
        //if no input given, display all data
        if(!e.target.value.toLowerCase()) return setSearchResults(posts)

        //returns boolean, if input is present, that is included in resultarray
        const resultsArray=posts.filter(post=>(post.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
        || (post.lastName.toLowerCase().includes(e.target.value.toLowerCase())))

        setSearchResults(resultsArray)
    }

  return (
    <div>
      <Search
      placeholder='Search...'
      onSearchChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchBar
