import React from 'react'

export default function Form(props) {
    console.log(props.posting);
  return (
    <>
        <form onSubmit={props.submit}>
      <div className="form-group row">
      <label htmlFor="title" className="col-sm-2 col-form-label">Tiêu đề</label>
      <div className="col-sm-10">
      <input type="text" onChange={props.changeHandler} value={props.posting.title} className="form-control" id="title" name='title' placeholder="Tiêu đề" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="content" className="col-sm-2 col-form-label">Nội dung</label>
      <div className="col-sm-10">
        <input type="text" onChange={props.changeHandler} value={props.posting.content} name='content' className="form-control" id="content" placeholder="Nội dung chính" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="file" className="col-sm-2 col-form-label">Hình Ảnh</label>
      <div className="col-sm-10">
        <input type="file" onChange={props.changeHandler}  name='img' className="form-control" id="image" placeholder="Ảnh" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="file" className="col-sm-2 col-form-label">Ảnh</label>
      <div className="col-sm-10">
        <img style={{width:"200px"}} src={"./images/"+props.posting.img} alt='file'></img>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="file" value={props.posting.show} className="col-sm-2 col-form-label">THỂ LOẠI</label>
      <div className="col-sm-10">
      <select onChange={props.changeHandler}  value={props.posting.show} className="form-control" name='show' id="exampleFormControlSelect1">
      <option selected={props.posting.show === "tin chính"}  value="tin chính">Tin chính</option>
      <option selected={props.posting.show ==="tin sốt dẻo"} value="tin sốt dẻo">Tin hot</option>
      <option selected={props.posting.show === "tin mới nhất"} value="tin mới nhất">Tin mới nhất</option>
    </select>
      </div>
    </div>
    <button id="submit"  type="submit" class="btn btn-primary">{props.action}</button>
  </form>
    </>
  )
}
