"use client";
import React, { useState } from "react";
import {useFormStatus, useFormState } from "react-dom";
import mysqlserver from '../mysqlserver/page';
import Link from "next/link";
const InitialState={
    message:null,
}

const addschool = () => {
    const { pending }=useFormStatus();
    const [state,formAction]=useFormState(mysqlserver,InitialState);

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [image,setImage]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [mystate,setState]=useState("");

   

    return (
        <div className="w-full h-full bg-yellow-700 text-gray-100 mx-auto">
            <h2 className="text-center pt-3 text-3xl font-semibold max-sm:text-xl"> This is AddSchool Item</h2>
            
            <form className="my-4 flex justify-center py-4 pb-6" method="POST" action={formAction}>  
                <div className="w-2/6 max-md:full   ">
                    <label className="">
                        Name:
                        <input type="text" name="name"  onChange={(e)=>setName(e.target.value)} placeholder="Name" className="py-2 px-4 m-2   w-full text-black outline-none rounded"  />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="py-2 px-4 m-2  w-full text-black outline-none rounded" />
                    </label>
                    <label>
                        Mobile:
                        <input type="text" name="mobile" onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile No" className="py-2 px-4 m-2  w-full text-black outline-none rounded" />
                    </label>
                    <label>
                        Image:
                        <input type="text" name="image" onChange={(e)=>setImage(e.target.value)} placeholder="Image Name" className="py-2 px-4 m-2  w-full text-black outline-none rounded" />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" onChange={(e)=>setAddress(e.target.value)} placeholder="Address" className="py-2 px-4 m-2  w-full text-black outline-none rounded" />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" onChange={(e)=>setCity(e.target.value)} placeholder="City" className="py-2 px-4 m-2  w-full text-black outline-none rounded" />
                    </label>
                    <label>
                        State:
                        <input type="text" name="state" onChange={(e)=>setState(e.target.value)} placeholder="State" className="py-2 px-4 m-2  w-full text-black outline-none rounded" />
                    </label>
                    <br />
                    <div className="">
                        <h2 className="text-black text-3xl text-center font-bold ">{state.message}</h2>
                    </div>
                    <button type="submit" value="Submit" name="submit" className="btn border px-4 py-2 rounded hover:bg-yellow-300 hover:text-black font-semibold" >
                        {pending?"....submit....":"submit"}
                     </button>   
                </div>
            </form>

            <li  className="text-center bg-red-500 hover:bg-red-800 w-1/5 absolute top-2 right-4 max-sm:right-1 max-sm:top-12 py-4 text-slate-100 text-1xl font-bold list-none rounded">
                    <Link href='/'>Home Page....</Link>
            </li>  
        </div>

    )
}

export default addschool