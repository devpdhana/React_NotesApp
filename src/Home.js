import {IoAddCircle} from 'react-icons/io5'
import { Link, Route, Routes } from 'react-router-dom'
import NewNotes from './NewNotes'
import Notes from './Notes'
import EditNote from './EditNote'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchResult,noteTitle,setNoteTitle,noteBody,setNoteBody,handleSubmit,editNoteTitle,setEditNoteTitle,editNoteBody,setEditNoteBody,handleEdit,handleDelete} = useContext(DataContext)
  return (
    <main>
        
        <Routes>
            <Route path='/newNote' element={
            <NewNotes 
            noteTitle = {noteTitle}
            setNoteTitle = {setNoteTitle}
            noteBody= {noteBody}
            setNoteBody= {setNoteBody}
            handleSubmit= {handleSubmit}/>}></Route>
            <Route path='/' element = {<Notes
            searchResult= {searchResult}
            handleDelete= {handleDelete}
            />} />
            <Route path='/editNote/:id' element={<EditNote 
            searchResult= {searchResult}
            editNoteTitle= {editNoteTitle}
            setEditNoteTitle= {setEditNoteTitle}
            editNoteBody= {editNoteBody}
            setEditNoteBody= {setEditNoteBody}
            handleEdit= {handleEdit}
            />} />
        </Routes>

        
        
    </main>
  )
}
export default Home
