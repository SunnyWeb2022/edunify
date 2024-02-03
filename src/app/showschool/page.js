
import Link from "next/link";
import executeQuery from "../db/page";


const showschool = async () => {
    const res = await executeQuery("select * from add_school_item", []);
    // console.log(JSON.stringify(res))
    return (
        <div className="bg-gray-100 w-full">
            <h2 className="text-center py-4 text-3xl font-bold">Student Information</h2>
            {/* {JSON.stringify(res)} */}
            <table className="table-auto w-full mt-4 h-50vh">
                <thead className="bg-yellow-200 h-1/5" >
                    <tr className="">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody className=" text-center">
                    {res.map((student)=>(
                            <tr key={student.id} className="divide-red-950 bg-yellow-300 hover:bg-yellow-500 ">
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.mobile}</td>
                                <td>{student.address}</td>
                                <td>{student.city}</td>
                                <td>{student.state}</td>
                                <td>{student.image}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
             <li  className="text-center bg-red-500 hover:bg-red-700 w-1/5 absolute top-2 right-4 py-4 text-slate-100 text-1xl font-bold list-none rounded">
                    <Link href='/'>Home Page....</Link>
            </li>           
            
        </div>
    );
}

export default showschool