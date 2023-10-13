import {signOut} from 'firebase/auth'
import { database } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
function Header() {
  const history = useNavigate()
  const handleClick = () =>{
    signOut(database).then(val=>{
       history('/')
       console.log(val)
    })
  }
  return (
    <header className="shadow-md py-6 px-5 flex justify-between text-white font-bold text-lg">
      <p className="text-blue-900 font-bold text-2xl">MyNote.</p>
      <button onClick={handleClick} className='bg-blue-900 p-2 rounded-md text-md'>Sign Out</button>
    </header>
  )
}

export default Header
