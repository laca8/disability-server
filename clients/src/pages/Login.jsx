import React,{useEffect, useState} from 'react'
import {loginUser} from '../redux//slicers/authSlice'
import {useSelector,useDispatch}   from 'react-redux'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../components/Spinner'
const Login = () => {
  const navigator = useNavigate()
  const  dispatch = useDispatch()
  const userDetails = useSelector((state)=>state.users)
  const {error,loading,success} = userDetails
const [notify,setNotify] = useState('')

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit=()=>{
  if(username == '' || password == ''){
      toast.error('الرجاء ادخال جميع البيانات')
    }
    if(username.length < 3){
      toast.error('الرجاء ادخال  اسم  يحتوي علي 3 احراف علي الاقل')
    }
    if(password.length < 6){
      toast.error('الرجاء ادخال  كلمة سر  تحتوي علي 6 احراف او 6 ارقام علي الاقل')
    }
      dispatch(loginUser({username,password}))
  }
  useEffect(()=>{
    if(error){
      setNotify(toast.error(error))      
  }else if(success){
      setNotify(toast.success('تم تسجيل الدخول'))
      navigator('/')

     }
  },[success,error])
  return (
    <section className="text-white  flex flex-col items-center  mt-20 w-full">

 <div>
  <span className='invisible'>{notify}</span>
    <ToastContainer position="top-right"/>
</div>
  {
                loading ? <Spinner/> :
    
            
          <div className="w-96 font-bold border-2 border-gray-400 p-10 max-md:w-80 max-sm:w-60 shadow-2xl ">
              <h1 className="text-xl font-bold leading-tight  text-white text-center">
                 تسجيل الدخول
              </h1>
             
             
            
                  <div className='flex flex-col items-start w-full'>
                      <label  className="text-sm font-medium text-white">الاسم</label>
                      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id=""  className='rounded-md bg-gray-800  w-full p-2 border-2 border-gray-400' placeholder="الاسم" required=""/>
                  </div>
                  <div className='flex flex-col items-start w-full'>
                      <label  className="text-sm font-medium text-white">الرقم السري</label>
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='rounded-md  bg-gray-800 w-full p-2 border-2 border-gray-400' name="password"  id="password" placeholder="الرقم السري" />
                      
                    
                  </div>
                  <div className='flex flex-col items-center mt-3 '>
                  <button type="submit" className="w-auto   bg-cyan-700 text-white p-2 rounded-md  " onClick={()=>handleSubmit()}>تسجيل الدخول</button>

                    </div>
                 
       
          </div>
}
     
</section>
  )
}

export default Login