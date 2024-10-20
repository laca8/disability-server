import React,{useState,useEffect} from 'react'
import Form1 from '../components/forms/Form1'
import { useNavigate } from 'react-router-dom'
const SuggDis = () => {
  const user = JSON.parse(localStorage.getItem('user'))

     const dis = ['إعاقة حركية','إعاقة بصرية','اعاقة ذهنية','إعاقة متعددة','إعاقة سمعية','إعاقة عقلية']
     const dis2 = ['إستفسارات إعاقة حركية','إستفسارات إعاقة بصرية','إستفسارات اعاقة ذهنية','إستفسارات إعاقة متعددة','إستفسارات إعاقة سمعية','إستفسارات إعاقة عقلية','أخرى']
     const sides = ['العاملين الصحيين','الرعاية الأساسية','خدمة المواطنين','الإتصال السياسي','الطب الوقائى','بنوك الدم','قطاع السكان و تنظيم الاسرة','الصحة النفسية','القطاع التعليمي','هيئة الإسعاف المصرية','الهيئة العامة للتأمين الصحي','أمانة المراكز','القطاع العلاجى','أخرى']
     const colors =['#193d5e','#d35467','#00ABD8','#00a650','#f0ad4e',' #94090D','gray','black','#00ABD8','#00a650','#f0ad4e',' #94090D','gray','black']
     const navigator = useNavigate()
     const handleClick = ()=>{
      if(user){
   navigator('/create')

      }else{
   navigator('/login')

      }
  }
    
     
  return (
    <div className='container'>
        <div className='flex flex-row items-center justify-center text-center mt-10'>
            <h1 className='text-center text-5xl font-bold'>الشاشة الرئيسية</h1>

        </div>

        <div className='grid grid-cols-3 p-1 justify-evenly mt-5 max-sm:grid-cols-1 gap-5'>

          {   

              <>
              {dis2.map((x,i)=>(
                <p onClick={()=>{handleClick()}} key={i} className={`p-4 rounded-md m-2 text-center text-white border-2 cursor-pointer hover:scale-95 duration-200 transition-all`} style={{backgroundColor:`${colors[i]}`}}>{x}</p>
              ))}
     
              </>
        

           
                   
                
          }
        </div>



    


    </div>
  )
}

export default SuggDis