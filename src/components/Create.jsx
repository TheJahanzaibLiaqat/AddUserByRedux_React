import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Store/UserSlice/UserSlice";
import { useNavigate } from "react-router-dom";


const Create = () => {
const navigate = useNavigate();
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [name ,setName] = useState("");
  const [email ,setEmail] = useState("");

  const handleChange = (e) =>{
    e.preventDefault();

    dispatch(addUser({id: data[data.length-1].id + 1 , name, email }))
    navigate("/")

  }

  return (
    <div className="flex justify-center mt-28">
      <div className="w-[50vw] bg-gray-600 p-10 ">
        <h1 className="text-white text-3xl font-semibold">Add New User</h1>
        <form action="" className="flex flex-col mt-4" onSubmit={handleChange}>
          <label className="text-white font-semibold text-lg">Name</label>
          <input type="text" placeholder="Enter your Name" className="p-3 rounded-md outline-none" onChange={(e)=> setName(e.target.value)}/>

          <label className="text-white font-semibold text-lg mt-5">Email</label>
          <input type="email" placeholder="Enter your Email" className="p-3 rounded-md outline-none" onChange={(e)=> setEmail(e.target.value)}/>

          <button className="bg-blue-600 text-white p-3 rounded-md w-fit mt-7">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
