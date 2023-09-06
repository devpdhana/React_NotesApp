import { Link } from "react-router-dom"
import {RiDeleteBin6Line} from 'react-icons/ri'

const Notes = ({notes,handleDelete}) => {
  return (
    <div className = "noteContainer">
        {
            notes.map((note)=>(
                <div key={note.id} className="noteCard" id="noteCard" style={{
                    backgroundColor : (note.background)
                }}>
                   <Link to ={`editNote/${note.id}`} className="note-card-link"><h3>{note.noteTitle}</h3>
                    <p id="p">{note.noteBody}</p> </Link>
                    <RiDeleteBin6Line onClick={()=>handleDelete(note.id)}/>
                </div>
            ))
        }
        </div>
  )
}
export default Notes