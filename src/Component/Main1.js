import React from 'react'

export default function Main1(props) {
  let row = "loading...";
  if( props.duLieu.length !==0){
    console.log(props.duLieu);
    row =props.duLieu.filter(item=>item.show==="tin chính")
    .map(item => <div className="col-md-6">
      <h3>Tin nổi bật</h3>
      <div className="card mb-12">
      <img className="card-img-top" src={"./images/"+item.img} alt="Card  cap" />
      <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      {showRow(props.duLieu)}
      </div>
      </div>
  </div> ) 
  }
  return (     
  <>
     {row}
  </>
  )
}
const showRow = (arr)=>{
  return arr.map( (item,index)=>{
    if(index<5){
      return  <p className="card-text">{item.title}</p>
    }
    else{
      return ""
    }
  })
}
