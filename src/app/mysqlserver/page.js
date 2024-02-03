"use server";

const { revalidatePath } = require("next/cache");
import executeQuery from "../db/page";

 const mysqlserver=async (prevState, formData) =>
{
    const name=formData.get('name');
    const email=formData.get('email');
    const mobile=formData.get('mobile');
    const image=formData.get('image');
    const address=formData.get('address');
    const city=formData.get('city');
    const state=formData.get('state');
    const submit=formData.get('submit');
    if(submit==='Submit'){
        // return {message: "Field can not bet empty"};
        if(name!="" && email!="" && mobile!="" && image!="" && address!="" && city!="" && state!="")
        {
       
           const result=await executeQuery("insert into add_school_item (name, email, mobile, image, address, city, state) values (?,?,?,?,?,?,?)",[name,email,mobile,image,address,city,state,]);
          
           if(result.affectedRows){
            revalidatePath("/addschool");
            return {message: "Record is inserted"};
           }     
           else{
            revalidatePath("/addschool");
            return {message: "Record is not inserted"};
           }
          
        }
        else{
            revalidatePath("/addschool")
            return {message: "Field can not be empty"};
        }
    }
    
    return ('<div></div>');
   
}

export default mysqlserver