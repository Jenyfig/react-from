import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: 'admin',
      password: ''
    }
  }

  login = () => {
    //console.log('获取用户名和密码的值');
    console.log(this.state.username);
    console.log(this.state.password);
  }

  change = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { username, password } = this.state
    return <div>
      用户名:<input name="username" value={username} onChange={this.change} type="text" /> <br />
      密码:  <input name="password" value={password} onChange={this.change} type="password" /> <br />
      <button onClick={this.login}>登录</button>
    </div>
  }

}