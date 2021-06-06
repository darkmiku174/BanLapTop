import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {Button} from 'react-bootstrap'
const SearchBox = () => {
	return(
			    <form class="search-simple" style={{display:'flex'}}>
				  <input type="text" name="search" placeholder="Search.."/>
				  
				</form>

		)
}
export default SearchBox;