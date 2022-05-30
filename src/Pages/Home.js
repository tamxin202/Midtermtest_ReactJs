import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Main1 from '../Component/Main1'
import Main2 from '../Component/Main2'
import Main3 from '../Component/Main3'
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(
    ()=>{
        //axios.get("https://6290397627f4ba1c65b59fa3.mockapi.io/news")
        axios.get("https://61bfebc9b25c3a00173f4f54.mockapi.io/midterm01")
        .then(res=>setData(res.data))
        .catch(res=>console.log(res))
    },[])
  return (
    <>
      {/* <div>Home</div>
      <div>aaaaaaaaafsdjfk askdf kasdjf djsafk asdkf aksdf kasdjfk sdajfk asdjkfj skdfj ksdjfkd sjfkdsj fksdjf ksdjfk sdjfksdahf asdfjasdh sdjhf sdfh sjkdfh</div> */}
      <div>
      <div className="row">
        <Main1 duLieu = {data}/>
        <Main2 duLieu = {data}/>
        <Main3 duLieu = {data}/>
      </div>
    </div>

    </>
  )
}
