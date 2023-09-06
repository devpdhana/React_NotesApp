import {IoAddCircle} from 'react-icons/io5'
import { Link, Route, Routes } from 'react-router-dom'
import NewNotes from './NewNotes'
import Notes from './Notes'
import EditNote from './EditNote'

const Home = ({notes,noteTitle,setNoteTitle,noteBody,setNoteBody,handleSubmit,editNoteTitle,setEditNoteTitle,editNoteBody,setEditNoteBody,handleEdit,handleDelete}) => {
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
            notes= {notes}
            handleDelete= {handleDelete}
            />} />
            <Route path='/editNote/:id' element={<EditNote 
            notes= {notes}
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
