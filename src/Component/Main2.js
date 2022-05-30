import React from 'react'

export default function Main2(props) {
  let row = "loading...";
  if( props.duLieu.length !==0){
    console.log(props.duLieu);
    row = props.duLieu.filter(item=>item.show==="tin sốt dẻo").map((item,index)=>{
      return <div key={index} className="col-md-12">   
                <div className="card mb-12">
                <img className="card-img-top" src={"./images/"+item.img} alt="Card  cap" />
                <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                </div>
                </div>
            </div>
    } 
    )
  }
  return (
       <div className='col-md-3'>
         <h3>Tin Nóng</h3>
       {row}
       </div>
  )
}
