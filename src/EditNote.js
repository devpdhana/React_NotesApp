import { useParams } from "react-router-dom"
import { useEffect } from "react"

const EditNote = ({notes,editNoteTitle,setEditNoteTitle,editNoteBody,setEditNoteBody,handleEdit}) => {
    const {id} = useParams()
    const note = notes.find((note)=>((note.id).toString() === id))
    useEffect(()=>{
      if (note){
          setEditNoteTitle(note.noteTitle)
          setEditNoteBody(note.noteBody)
      }
  },[notes,setEditNoteTitle,setEditNoteBody])

  return (
    <main>
        <form className="note-form" onClick = {(e)=>e.preventDefault()}>
            <div className="form-group">
              <label>Note Title</label>
              <input 
              required
              type = "text"
              id ="editNoteTitle"
              value={editNoteTitle}
              onChange={(e)=>setEditNoteTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Note Body</label>
              <textarea 
              type = "text"
              id ="editNoteBody"
              value={editNoteBody}
              onChange={(e)=>setEditNoteBody(e.target.value)}
              />
            </div>
            
            <button type = "submit" onClick={()=>handleEdit(note.id)}>Add</button>
            
            
        </form>
    </main>
  )
}
export default EditNote