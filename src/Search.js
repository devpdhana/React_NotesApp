import { useContext } from "react"
import { IoAddCircle } from "react-icons/io5"
import { Link } from "react-router-dom"
import DataContext from "./context/DataContext"
const Search = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <div className="search-container">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input 
            className="searchItem"
            type="text"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
        </form>
        <Link to="newNote" className="add-link" > <IoAddCircle className='addIcon'/> </Link>
    </div>
  )
}
export default Search