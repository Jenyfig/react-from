import React, { Component } from 'react'

export default class Life extends Component {
  constructor() {
    super()
    console.log('---state---');

    this.state = {
      name: '',
      age: 0
    }
  }

  componentWillMount() {
    //发送网络请求
    setTimeout(() => {
      this.setState({
        name: '春燕',
        age: 32
      })
    }, 2000)
  }

componentDidCatch(){
  console.log('初次渲染操作dom');
}

componentWillReceiveProps(props){
  console.log(props);
  console.log('父组件给我传递了新的id,拿着ID发送网络请求');
}

componentWillUpdate(){
  console.log('再次渲染,可以做点其他事情');
}

  render() {
console.log('---render----');

    return <div id="life" >
      <br />
      {this.state.name}--{this.state.age}
    </div>
  }

 componentDidUpdate(){
   console.log('拿到再次渲染之后的dom');
 } 

 componentWillUnmount(){
   console.log('清理工作,比如清除定时器');
 }
}