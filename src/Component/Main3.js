import React from 'react'

export default function Main3(props) {
  let row = "loading...";
  if( props.duLieu.length !==0){
      row=  props.duLieu.filter(item=>item.show==="tin mới nhất").map((item,index)=> 
      {
        return  <div key={index} className="card">
        <div className='row'>
        <img className="card-img-top col-md-6" src={"./images/" +item.img} alt="Card cap" />
        <p className="card-text col-md-6">{item.title}</p> 
        </div>
        </div>
      }
  )
  }
  return (
    <div className="col-md-3">
            <h3>Mới cập nhật</h3>
            {row}
        </div>
  )
}

