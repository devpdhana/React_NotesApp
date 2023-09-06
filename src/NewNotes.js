const NewNotes = ({noteTitle,setNoteTitle,noteBody,setNoteBody,handleSubmit}) => {
    return (
      <main>
          <form className="note-form" onClick = {(e)=>e.preventDefault()}>
              <div className="form-group">
                <label>Note Title</label>
                <input 
                required
                type = "text"
                id ="noteTitle"
                value={noteTitle}
                onChange={(e)=>setNoteTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Note Body</label>
                <textarea 
                type = "text"
                id ="noteBody"
                value={noteBody}
                onChange={(e)=>setNoteBody(e.target.value)}
                />
              </div>
              
              <button type="submit" onClick={handleSubmit}>Add</button>
              
              
          </form>
      </main>
    )
  }
  export default NewNotes