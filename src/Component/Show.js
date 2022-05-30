

export default function Show(props) {
    let row ="loading...";
    if(props.data.length !== 0){
        console.log(props.data);
        row = props.data.map(item=>
            <div className="card" style={{width: '17rem'}}>
                            <img className="card-img-top" src={"./images/"+item.img} alt="Card  cap" />
                            <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.content}</p> 
                             <p className="card-text">Thể loại: {item.show}</p>
                            <button id={item.id} onClick={props.delete} className="btn btn-primary">delete</button> 
                             <button id={item.id} onClick={props.edit}  className="btn btn-primary">update</button>
                            </div>
            </div>)
    }
  return (
   <div className="row">
    {row}
   </div>
  )
}
