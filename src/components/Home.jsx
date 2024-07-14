import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { delUser } from "../Store/UserSlice/UserSlice";


const Home = () => {
    const data = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const userDel = (id) => {
        dispatch(delUser({id: id}))
    }
  return (
    <div className="w-[50vw] mx-auto">
      <div className="uppercase font-semibold text-4xl mt-20 mb-5">
        Crud App with Redux Toolkit
      </div>
      <Link to="/create" className="bg-green-700 text-white py-2 px-4 rounded-md font-semibold">Click +</Link>

      <table className=" border border-slate-600 border-separate mt-16">
        <thead>
            <tr>
                <th className="border border-slate-500 p-5">Id</th>
                <th className="border border-slate-500 p-5">Name</th>
                <th className="border border-slate-500 p-5">Email</th>
                <th className="border border-slate-500 p-5">Action</th>
            </tr>
        </thead>
        <tbody>
            
          {
            data.map((item, index) =>(
                <tr key={index}>
                    <td className="border border-slate-500 p-5">{item.id}</td>
                    <td className="border border-slate-500 p-5">{item.name}</td>
                    <td className="border border-slate-500 p-5">{item.email}</td>
                    <td className="border border-slate-500 p-5 space-x-5">
                        <Link to={`/update/${item.id}`} className="bg-blue-600 text-white p-3 rounded-md">Edit</Link>
                        <button className="bg-red-600 text-white p-3 rounded-md" onClick={()=> userDel(item.id)}>Delete</button>

                    </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home
