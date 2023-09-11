"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./lib/firebase";

export default function LoginPage() {

  //const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = async (data) => {
    console.log('data',data)
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      
      alert("登录成功!");
      router.push("/"); 
    } catch (error) {
      alert("登录失败!");
    }
  };  

  return (
    <div className=" ">
    <h1 className="m-3 text-3xl font-bold">WelCome Login Page</h1>
    <form onSubmit={handleSubmit(onSubmit)} className=" justify-center items-center">
      <div className=" space-y-4  flex flex-col justify-center items-center">
      <input 
      className='w-60 border-solid border-2 border-blue-400 rounded-lg p-1'
      {...register("email", {
        required: "用户名必填",
        validate: (value) => {
          if(value === "") { 
            return {
              error: true,
              message: "用户名不能为空"
            };
          }
        
          
          return /^\S+@\S+\.\S+$/.test(value) || "请输入正确的邮箱📫";  
        } 
      })}
        placeholder="Email" 
      />
      {errors.email && <p className=" bg-gray-500 bg-opacity-30 p-1 rounded-lg text-yellow-200">{errors.email.message}</p>}

      <input 
        className='w-60 border-solid border-2 border-blue-400 rounded-lg p-1'
        /* {...register("password")} */
        {...register("password", {
          required: true,
          required: "password can not be blank!",
          validate: (value) => {
            const reg = /^.{6,12}$/; 
            return reg.test(value) || "Password must be 6-12 characters";
          }
        })}
        placeholder="Password"
        type="password" 
      />
          {errors.password && <p className=" bg-gray-500 bg-opacity-30 p-1 rounded-lg text-yellow-100  ">{errors.password.message}</p>}

      </div>
      <div className="flex justify-center items-center my-4">
      <button type="submit" className="p-2 w-44 bg-blue-400 rounded-xl text-white">Sing In</button>
      </div>
    </form>
    </div>
  );

}