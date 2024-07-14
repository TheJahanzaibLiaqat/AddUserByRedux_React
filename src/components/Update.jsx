import { useNavigate, useParams } from "react-router-dom"
import {  useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { updateUser } from "../Store/UserSlice/UserSlice"


const Update = () => {
    const {id} = useParams();
    const data = useSelector((state) => state.users);
    const existingUsers = data.filter(f => f.id == id);
    const {name , email} = existingUsers[0];
    const [uname ,setName] = useState(name);
  const [uemail ,setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateUser({
        id: id,
        name: uname,
        email: uemail
    }))
    navigate("/")

  }

    return (
        <div className="flex justify-center mt-28">
          <div className="w-[50vw] bg-gray-600 p-10 ">
            <h1 className="text-white text-3xl font-semibold">Update New User</h1>
            <form action="" className="flex flex-col mt-4" onSubmit={handleUpdate}>
              <label className="text-white font-semibold text-lg">Name</label>
              <input type="text" placeholder="Enter your Name" className="p-3 rounded-md outline-none" onChange={(e)=> setName(e.target.value)}  value={uname} />
    
              <label className="text-white font-semibold text-lg mt-5">Email</label>
              <input type="email" placeholder="Enter your Email" className="p-3 rounded-md outline-none" onChange={(e)=> setEmail(e.target.value)}  value={uemail}/>
    
              <button className="bg-blue-600 text-white p-3 rounded-md w-fit mt-7">Update</button>
            </form>
          </div>
        </div>
      )
}

export default Update
