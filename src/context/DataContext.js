import {createContext,useState,useEffect} from 'react'
// import {useEffect, useState} from 'react'
import { json, useNavigate } from 'react-router-dom';

const DataContext = createContext({})

export const DataProvider = ({children})=>{

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
    <DataContext.Provider
    value={{
        search,setSearch,
        searchResult,noteTitle,setNoteTitle,noteBody,setNoteBody,handleSubmit,
        editNoteTitle,setEditNoteTitle,editNoteBody,setEditNoteBody,
        handleEdit,handleDelete
    }}>
        {children}
    </DataContext.Provider>
  )  
} 

export default DataContext