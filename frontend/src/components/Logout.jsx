import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
function Logout() {
    const [authUser, setAuthUser ] = useAuth()
    const handleLogout = () => {
       try {
           setAuthUser({
            ...authUser,
               user:null
           })
           localStorage.removeItem("Users")
         toast.success("Logged out Successfully")
         setTimeout(() => {
        window.location.reload();
        }, 2000);
       } catch (error) {
        toast.error("error logging out", error.message)
       }
    }
  return (
    <div>
          <button className='bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer'
              onClick={handleLogout}
          >Logout</button>
    </div>
  )
}

export default Logout
