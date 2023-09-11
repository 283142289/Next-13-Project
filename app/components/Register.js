"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./lib/firebase";
//import {createUserWithEmailAndPassword} from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = async (data) => {
    console.log('data',data)
    
  };

  return (
    <div >
    <h1 className="m-3 text-3xl font-bold">WelCome Sign Up</h1>
    <form onSubmit={handleSubmit(onSubmit)} className=" justify-center items-center">
      <div className=" space-y-4  flex flex-col justify-center items-center">
        {/* Email */}
      <input 
      className='w-60 border-solid border-2 border-blue-400 rounded-lg p-1'
      {...register("email", {
        required: "Please Enter Email !",
        validate: (value) => {
          return /^\S+@\S+\.\S+$/.test(value) || "请输入正确的邮箱📫";  
        } 
      })}
        placeholder="Email" 
      />
      {errors.email && <p className=" bg-gray-500 bg-opacity-30 p-1 rounded-lg text-yellow-200">{errors.email.message}</p>}
      {/* 密码 */}
      <input 
        className='w-60 border-solid border-2 border-blue-400 rounded-lg p-1'
        {...register("password", {
          required: "Password can not be blank!",
          validate: (value) => {
            const reg = /^.{6,12}$/; 
            return reg.test(value) || "Password must be 6-12 characters";
          }
        })}
        placeholder="Password"
        type="password" 
      />
      {errors.password && <p className=" bg-gray-500 bg-opacity-30 p-1 rounded-lg text-yellow-100  ">{errors.password.message}</p>}
      {/* 确认密码 */}
      <input 
        className='w-60 border-solid border-2 border-blue-400 rounded-lg p-1'
        {...register("Repassword", {
          required: "Password can not be blank!",
          validate: (value) => {
            const reg = /^.{6,12}$/; 
            return reg.test(value) || "Password must be 6-12 characters";
          }
        })}
        placeholder="RePassword"
        type="password" 
      />
          {errors.password && <p className=" bg-gray-500 bg-opacity-30 p-1 rounded-lg text-yellow-100  ">{errors.password.message}</p>}
      {/*  */}
      </div>
      <div className="flex justify-center items-center my-4">
        <button type="submit" className="p-2 w-44 bg-blue-400 rounded-xl text-white">Sign Up</button>
      </div>
    </form>
    </div>
  );

}