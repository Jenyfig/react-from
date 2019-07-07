import React from 'react'

import Book from './components/book/Book'

 import { hot } from 'react-hot-loader/root'

import IFAndFor from './components/IFAndFor'

import Checkbox from './components/Checkbox'
import Fefcheck from './components/Fefcheck'


class App extends React.Component{

    getChildValue = data => {
        console.log('父组件 ',data)
    }

    //生命周期函数
    render(){
        // 渲染视图用的是 jsx 语法
        return (
            <div>
                <IFAndFor></IFAndFor>
                <br/>
                <Book />
                <br/>
                <Checkbox></Checkbox>
                <br/>
                <Fefcheck></Fefcheck>
            </div>
        )
    }
}

export default hot(App)