import React, { Component } from 'react'

export default class Checkbox extends Component {
  constructor() {
    super()
    this.state = {
      fruit: ['WaterMemon', 'orange', 'apple', 'Lemon', 'grape'],
      svalues: ['orange', 'apple'],
      sexs: ['male', 'female'],
      sex: ['male']
    }
  }

  change = e => {
    //console.log(e.target.value)
    if (this.state.svalues.includes(e.target.value)) {
      //如果被选中
      const newArray = this.state.svalues.filter(item => item != e.target.value)
      this.setState({
        svalues: newArray
      })
    } else {
      //如果没有被选中
      const newArray1 = [...this.state.svalues, e.target.value]
      this.setState({
        svalues: newArray1
      })
    }
  }

  changex = e => {
    if (this.state.sex.includes(e.target.value)) {
      //如果选中
      const newArray = this.state.sexs.filter(item => item != e.target.value)
      this.setState({
        sex: newArray
      })
    } else {
      //如果没有被选中
      const newArray1 = [...this.state.sexs, e.target.value]
      this.setState({
        sex: newArray1
      })
    }
  }
  render() {
    const { fruit, svalues, sexs, sex } = this.state
    return (
      <div>
        <form>
          喜欢的水果:
          {fruit.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  onChange={this.change}
                  value={item}
                  checked={svalues.includes(item)}
                />
                {item} &nbsp;
              </label>
            )
          })}
          
          <br />
          性别:
          {sexs.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  value={item}
                  checked={sex.includes(item)}
                  onChange={this.changex}
                />
                {item} &nbsp;
              </label>
            )
          })}
        </form>
        <br />
      </div>
    )
  }
}
