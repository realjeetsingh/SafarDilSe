
// components/GoogleForm.js - replacement for HubSpot form
'use client'
import { useState } from 'react'

// NOTE: Replace placeholder Google Form field IDs below with those from your actual Google Form
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'
const FIELDS = {
  name: 'entry.111111',
  email: 'entry.222222',
  phone: 'entry.333333',
  destination: 'entry.444444',
  message: 'entry.555555'
}

export default function GoogleForm(){
  const [data,setData]=useState({name:'',email:'',phone:'',destination:'',message:''})
  const [sending,setSending]=useState(false)
  const [sent,setSent]=useState(false)

  const handleChange=e=>setData({...data,[e.target.name]:e.target.value})

  const handleSubmit=async e=>{
    e.preventDefault();
    setSending(true)
    const formData=new FormData()
    Object.entries(FIELDS).forEach(([key,id])=>formData.append(id,data[key]))
    try{
      await fetch(GOOGLE_FORM_ACTION,{method:'POST',mode:'no-cors',body:formData})
      setSent(true)
      setData({name:'',email:'',phone:'',destination:'',message:''})
    }catch(err){
      console.error(err)
    }
    setSending(false)
  }

  if(sent){
    return (
      <div className="text-center py-20">
        <h3 className="text-3xl font-bold text-adventure-orange mb-4">Thank you!</h3>
        <p className="text-gray-700 dark:text-gray-300">We will contact you soon.</p>
        <button className="btn-primary mt-6" onClick={()=>setSent(false)}>Send Another</button>
      </div>)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input required name="name" value={data.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"/>
        <input required type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"/>
        <input required name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"/>
        <select name="destination" value={data.destination} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white">
          <option value="">Preferred Destination</option>
          <option value="kasol">Kasol</option>
          <option value="manali">Manali</option>
          <option value="tirthan">Tirthan Valley</option>
          <option value="tungnath">Tungnath</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <textarea name="message" rows="4" value={data.message} onChange={handleChange} placeholder="Message" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white"></textarea>
      <div className="text-center">
        <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50">{sending?'Sending...':'Send Message'}</button>
      </div>
    </form>
  )
}
