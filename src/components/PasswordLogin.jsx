import {BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterAndLogin from './RegisterAndLogin'
import Landing from './Landing'
import NotePage from './NotePage'

function PasswordLogin() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
           <Route path='/' element={<Landing/>}></Route>
           <Route path='/RegisterAndLogin' element={<RegisterAndLogin/>}></Route>
           <Route path='/NotePage' element={<NotePage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default PasswordLogin