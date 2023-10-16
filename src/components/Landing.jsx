import { useNavigate } from "react-router-dom"
function Landing() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/RegisterAndLogin");
    }
  return (
    <div>
      <header className="bg-white shadow-lg flex justify-between items-center px-3 py-5">
        <p className="text-blue-900 text-3xl font-bold ">MyNote.</p>
        <button onClick={handleClick} className="bg-blue-900 hover:bg-blue-900/90 text-white  px-3 py-3 rounded-lg">Sign in</button>
      </header>
      <main className="p-5 px-6 flex items-center justify-center min-h-screen">
        <div className="space-y-8 text-center">
          <h1 className="text-blue-900 font-bold text-6xl">Welcome to MyNote. App</h1>
          <p className="text-blue-900 text-xl w-full text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rerum..</p>
          <button onClick={handleClick} className="w-[40%] rounded-md shadow-sm bg-blue-900 text-white p-3 hover:bg-blue-900/90">Sign in</button>
        </div>
        {/* <div>
          <img src="assets/robot.png" alt="" />  
        </div> */}
      </main>
    </div>
  )
}

export default Landing