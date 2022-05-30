import axios from 'axios';
import React from 'react'

import Form from '../Component/Form'
import { useEffect,useState } from 'react';
import Show from '../Component/Show';

export default function Add() {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState("add")
  const [status,setStatus] = useState(false)
  const [posting, setPosting] = useState({
    img:'',
    title:'',
    content:'',
    show:''
    });
  useEffect(
    ()=>{
        axios.get("https://61bfebc9b25c3a00173f4f54.mockapi.io/midterm01")
        .then(res=>setData(res.data))
        .catch(res=>console.log(res))
    },[status])
    //done

    const  deletee = async (e)=>{
      await axios.delete(`https://61bfebc9b25c3a00173f4f54.mockapi.io/midterm01/${e.target.id}`)
      .then(res => {
      console.log(res);
      console.log(res.data);})
      // window.location.reload(true)
      setStatus(!status)
  }

  const edit = (e)=>{
    // setStudent({...student, [e.target.name]: e.target.value})
    axios.get(`https://61bfebc9b25c3a00173f4f54.mockapi.io/midterm01/${e.target.id}`)
    .then(res=>{
      setPosting(res.data);
      setBtn("edit")
    })
    .catch(res=>console.log(res))
  }
    const changeHandler = e => {
      let name = e.target.name
      let value = e.target.value
      //change to  get ending file
      if(name === "img"){
        value = ""+ document.querySelector("#image").files.item(0).name;
        // value = URL.createObjectURL(file)
      }
      setPosting({...posting, [name]: value})
    }
   const submit = e=>{
      e.preventDefault()
      document.querySelector("#submit").innerHTML === 'add'
       ?
       axios.post(`https://61bfebc9b25c3a00173f4f54.mockapi.io/midterm01`, posting)
       .then(res => {
         console.log(res);
         console.log(res.data);
         setStatus(!status)
         setPosting({img:'',title:'',content:'',show:''})
       })
       :
       axios.put(`https://61bfebc9b25c3a00173f4f54.mockapi.io/midterm01/${posting.id}`, posting)
       .then(res => {
         console.log(res);
         console.log(res.data);
         setStatus(!status)
       })
   }
  return (
    <>
      <Form 
       action={btn}
       posting = {posting}
       changeHandler = {changeHandler}
       submit = {submit} />
      <Show
        edit ={edit}
        data={data}
        delete={deletee}
      ></Show>
    </>
  )
}
