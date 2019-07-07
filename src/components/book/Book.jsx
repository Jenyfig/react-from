import React, { Component } from 'react'
import "./Book.css"
export default class Book extends Component {
    constructor() {
        super()
        this.state = {
            menu: [
                { id: 1, name: '水浒传' },
                { id: 2, name: '虹路梦' },
                { id: 3, name: '西游记' },
                { id: 4, name: '三国' }
            ],
            className: '',
            isEdit: false,  //是否修改,
            editID:null
        }
        this.myRef = React.createRef();
    }

    _getIds = () => {
        const ids = this.state.menu.map(item => item.id)
        const maxId = Math.max(...ids)
        return maxId + 1
    }

    addClick = () => {
        if (!this.state.isEdit) {  //新增
            const newArry = [...this.state.menu, { id: this._getIds(), name: this.state.className }]
            this.setState({
                menu: newArry
            }, () => {
                this.setState({
                    className: '',
                })
            })
        } else {
            const editArry = this.state.menu.find(item => item.id ===this.state.editID)
            editArry.name=this.state.className
            this.setState({
                menu: this.state.menu,
            },() => {
                this.setState({
                    className: '',
                })
            })

            this.state.isEdit=false
            this.state.editID=null

        }
    }

    change = (e) => {
        this.setState({
            className: e.target.value
        })
    }

    Delet = (id) => {
        console.log(id);
        const newArry = this.state.menu.filter(item => item.id != id)
        this.setState({
            menu: newArry
        })
    }

    edit=(id)=>{
        const editArry = this.state.menu.find(item => item.id == id)
        this.setState({
            className: editArry.name
        })

        this.state.isEdit=true
        this.state.editID=id
    }

    render() {

        const { menu, className } = this.state
        return (
            <div>
                书名: <input onChange={this.change} value={className} type="text" />
                <button onClick={this.addClick}>新增/修改</button>
                <br /> <br />
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>书名</th>
                            <th>编辑</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <a href="javascript:void(0)" onClick={() => { this.edit(item.id) }} >编辑</a>&nbsp;&nbsp;&nbsp;
                                        <a href="javascript:void(0)" onClick={() => { this.Delet(item.id) }} >删除</a>
                                </td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}
