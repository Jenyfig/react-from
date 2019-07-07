import React, { Component } from 'react'
import Main from '../components/login/Main'
import Login from '../components/login/Login'
import Life from '../components/login/Life'

export default class IFAndFor extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      potions:[
        {id:1,name:'杨晓珍',skill:'巴黎五'},
        {id:2,name:'演过',skill:'玉女心经'},
        {id:3,name:'乔峰',skill:'降龙十八掌'},
        {id:4,name:'谢敏',skill:'哭哭滴滴'}
      ]
    }
    
  }

  render() {
    return <div id="ifAndFor">
      {
        //  this.state.isLogin?<Main />:<Login/>
      }
      {this.state.isLogin && <Main />}
      {!this.state.isLogin && <Login />}
      <br />
      <button>登录/登出</button>
      <br/>
      <ul>
      {this.state.potions.map(item=>{
        return <li key={item.id} >{item.name}---{item.skill}</li>
      }) }
      </ul>
     <br/>
     <Life/>
   
    </div>
  }

}