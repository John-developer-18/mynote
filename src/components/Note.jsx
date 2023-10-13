import DisplayNote from "./DisplayNote"
import { useState, useEffect } from "react"
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"
import {db} from '../firebase.config'
function Note() {
  const [notes, setNotes] = useState([])
  const [addNote, setAddNote] = useState({title:"", content:""})
  const [id, setId]  = useState("")
  const noteRef = collection(db, 'note')
  
  useEffect(()=>{
     const getNotes = async () =>{
       const data = await getDocs(noteRef)
       setNotes(data.docs.map((docs)=>({...docs.data(), id: docs.id})))
     }
     getNotes()
  }, [noteRef])
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({...addNote, [name]: value})
 }
 const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(addNote)
    await addDoc(noteRef, addNote)
 }
 const deleteNote = async (id) =>{
         const deletenote = doc(noteRef, id)
         await deleteDoc(deletenote)
 }
 const updateNote = async (note) =>{
     console.log(note)
     setAddNote({title: note.title, content: note.content})
     setId(note.id) 
 }
 const updatedNote = async (id) =>{
     console.log(id)
     const updatenote = doc(db, 'note', id)
     await updateDoc(updatenote, addNote)
 }
  return (
    <div className="px-4 pt-8">
      <form onSubmit={handleSubmit} action="post" className="flex flex-col space-y-4 cursor-pointer md:max-w-4xl mx-auto">
        <input type="text" name="title" placeholder="Enter title Here" className="shadow-lg p-5 focus:outline-blue-900 focus:ring-blue-900 rounded-md font-semibold text-2xl" onChange={handleChange} value={addNote.title}  />
        <textarea name="content" id="" cols="30" rows="4" className="shadow-lg p-5 focus:outline-blue-900 focus:ring-blue-900 rounded-md" placeholder="Type Content Here...." onChange={handleChange} value={addNote.content}></textarea>
        <div className="flex space-x-2">
         <button type="submit" className="self-start bg-blue-900 shadow-blue-900 shadow-md text-white px-5 py-3 rounded-lg hover:bg-blue-900/90">Submit</button>
         <button type="button" className="self-start bg-blue-900 shadow-blue-900 shadow-md text-white px-5 py-3 rounded-lg hover:bg-blue-900/90" onClick={()=>updatedNote(id)}>Update</button>
        </div>
      </form>

     <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:container pt-5 md:max-w-4xl md:mx-auto  my-10"> 
       {notes && notes.map((note,id) =>{
        return (<DisplayNote key={id} title={note.title} content={note.content} id={note.id} getId={deleteNote} getUpdateNoteId={updateNote}/>)
       })}
    </div> 
    </div>
  )
}

export default Note
