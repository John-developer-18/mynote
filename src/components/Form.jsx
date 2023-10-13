/* eslint-disable react/prop-types */
import { useState } from "react"
function Form(props) {
  const [note, setNote] = useState({title:"", content:""})
  
  const handleChange = (e) =>{
     const name = e.target.name;
     const value = e.target.value;
     setNote({...note, [name]: value})
  }
  const handleSubmit = (e) =>{
     e.preventDefault()
     console.log(note)
     props.onCreate(note)
     setNote({title:"",content:""} )
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="post" className="flex flex-col space-y-4 cursor-pointer">
        <input type="text" name="title" placeholder="Enter title Here" className="shadow-lg p-5 focus:outline-blue-900 focus:ring-blue-900 rounded-md font-semibold text-2xl" onChange={handleChange} value={note.title}  />
        <textarea name="content" id="" cols="30" rows="4" className="shadow-lg p-5 focus:outline-blue-900 focus:ring-blue-900 rounded-md" placeholder="Type Content Here...." onChange={handleChange} value={note.content}></textarea>
        <button type="submit" className="self-start bg-blue-900 text-white px-5 py-3 rounded-lg hover:bg-blue-900/90">Submit</button>
      </form>
    </div>
  )
}

export default Form
