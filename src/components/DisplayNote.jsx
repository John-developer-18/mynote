/* eslint-disable react/prop-types */

function DisplayNote(props) {
  const handleClick = (id) =>{
     props.getId(id)
  }

  const  handleUpdate = (note) =>{
    props.getUpdateNoteId(note)
  }
  return (
    <div>
       <div className="shadow-lg space-y-7 py-7 px-7 rounded-lg">
        <p className="text-blue-900 text-2xl font-semibold">{props.title}</p>
        <p>{props.content}</p>
        <div className="space-x-3">
          <button className="bg-blue-900 rounded-lg text-white px-4 py-2 hover:bg-blue-900/90" onClick={()=>handleClick(props.id)}>Delete</button>
          <button className="bg-blue-900 rounded-lg text-white px-4 py-2 hover:bg-blue-900/90" onClick={()=>handleUpdate({content: props.content, title: props.title, id: props.id})}>Update</button>
        </div>        
      </div>
    </div>
  )
}

export default DisplayNote