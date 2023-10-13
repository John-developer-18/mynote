import {database} from '../firebase.config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function RegisterAndLogin() {
  const[login, setLogin] = useState(false)
  const history = useNavigate()
  const handleSubmit = (e,type) =>{
     e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;
     if(type=='sign-up'){
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,'authData')
            history('/NotePage')
         }).catch(err=>{
            alert(err.code)
            setLogin(true)
         })  
     }
     else{
        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,'authData')
            history('/NotePage')
         }).catch(err=>{
            alert(err.code)
         })
     }
  
  }
  return (
    <div className="min-h-screen grid place-content-center space-y-4 text-center text-blue-900 border-2">
      <div className='flex flex-row justify-center space-x-3 items-center'>
        <div className={login == false?'border-[1px] border-blue-900 p-3':'cursor-pointer'} onClick={()=>setLogin(false)}>Sign up</div>
        <div className={login == true?'border-[1px] border-blue-900 p-3':'cursor-pointer'} onClick={()=>setLogin(true)}>Sign in</div>
      </div>
      <h1 className="font-bold text-lg">{login?'Sign in':'Sign up'}</h1>
      <form className="flex flex-col space-y-5" onSubmit={(e)=>handleSubmit(e,login?'sign-in':'sign-up')}>
        <input name="email" placeholder="Email" className="outline-blue-900 outline-2 cursor-pointer border-blue-900 border-[1px] px-3 py-1"/>
        <input name="password" type="password" placeholder="Password" className="outline-blue-900 outline-2 cursor-pointer px-3 py-1 border-blue-900 border-[1px]"/>
        <button className="bg-blue-900 hover:bg-blue-900/90 text-white px-3 py-2">{login?'Sign up':'Sign up'}</button>
      </form>
    </div>
  )
}

export default RegisterAndLogin