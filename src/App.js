import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NewNotes from './NewNotes';
import Home from './Home';
import {useEffect, useState} from 'react'
import { json, useNavigate } from 'react-router-dom';
import Search from './Search';

function App() {

  const [notes,setNotes] = useState(
    JSON.parse(localStorage.getItem('myNote')) || []
  )
  const [noteTitle,setNoteTitle] = useState('')
  const [noteBody,setNoteBody] = useState('')
  const [search,setSearch] = useState('')
  const [searchResult,setSearchResult] = useState([])
  const [editNoteTitle,setEditNoteTitle] = useState('')
  const [editNoteBody,setEditNoteBody] = useState('')

  const navigate = useNavigate()

  const handleSubmit = ()=>{
    const id = (notes.length)+1
    const backgorund = randomBackgroundGenerator()
    const newNote = {id:id,noteTitle,noteBody,background:backgorund}
    const myNotes = [...notes,newNote]
    setNotes(myNotes)
    localStorage.setItem("myNote",JSON.stringify(myNotes))
    setNoteTitle('')
    setNoteBody('')
    navigate('/')
  }


  const randomBackgroundGenerator = ()=>{
    const color = ["yellow","gray","blue","red"]
    const index = Math.floor(Math.random()*4)
    return (color[index])
  }

  const handleEdit = (id)=>{
    const color = randomBackgroundGenerator()
    const newNote = {id,noteTitle:editNoteTitle,noteBody:editNoteBody,background:color}
    const updatedNotes = notes.map((note)=>(note.id) === id ? {...note,...newNote} : note)
    setNotes(updatedNotes)
    localStorage.setItem("myNote",JSON.stringify(updatedNotes))
    navigate('/')
  }

  const handleDelete = (id)=>{
    const updatedNotes = notes.filter((note)=>(note.id) !== id)
    setNotes(updatedNotes)
    localStorage.setItem('myNote',JSON.stringify(updatedNotes))
  }

  useEffect(()=>{
    const loadNotes = ()=>{
      const searchResult = notes.filter((note)=>(
        ((note.noteTitle).toLowerCase()).includes(search.toLowerCase())
      ))
      
      setSearchResult(searchResult)

    }
    loadNotes()
  },[notes,search])

  return (
    <div>
      <Header />
      <Search 
      search = {search}
      setSearch = {setSearch}/>
      <Home 
      notes = {searchResult}
      noteTitle = {noteTitle}
      setNoteTitle = {setNoteTitle}
      noteBody= {noteBody}
      setNoteBody= {setNoteBody}
      handleSubmit= {handleSubmit}
      editNoteTitle= {editNoteTitle}
      setEditNoteTitle= {setEditNoteTitle}
      editNoteBody= {editNoteBody}
      setEditNoteBody= {setEditNoteBody}
      handleEdit= {handleEdit}
      handleDelete= {handleDelete}
      />
    </div>
  );
}

export default App;
