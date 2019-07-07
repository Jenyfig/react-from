import React, { Component } from 'react'

export default class Fefcheck extends Component {

  constructor() {
    super()
    this.state = {
      imgpath: null
    }
    //this.myRef = React.createRef();
    this.fileRef = React.createRef();
  }


  render() {

    return <div >
      <form>
        {/* <input type="text" ref={this.myRef} style={{width:'300px'}} />
     <br/> */}
        <br />
        <br />
        文件:<input type="file" ref={this.fileRef} />
        <br /><br />
        <button type="button" onClick={this.upload}>文件上传</button>
        {
          this.state.imgpath && <img style={{ width: 300, height: 300 }} src={this.state.imgpath} />
        }
      </form>
    </div>
  }

  upload = () => {
    const file = this.fileRef.current.files[0]
    if(file){
      const xhr = new XMLHttpRequest()
      const formData = new FormData()
  
      formData.append('file', file)
      xhr.open('post', 'http://127.0.0.1:8888/uploadFile')
      xhr.send(formData)
  
      xhr.onreadystatechange = () => {
  
        if (xhr.readyState === 4 && xhr.status === 200) {
          var jsonStr = xhr.responseText
          var obj = JSON.parse(jsonStr)
          console.log(obj);
          this.setState({
            imgpath: obj.path
          })
        }
      }
    }
   
  }
  componentDidMount() {
    //新版本ref
    // this.myRef.current.focus()
    // this.fileRef.current.focus()
  }
}