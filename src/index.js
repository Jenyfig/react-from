// 导包
import React from 'react'
// 针对Web平台
import ReactDOM from 'react-dom'

// 导入根组件，如果不写配置，需要在webpack中进行配置
import App from './App'

// 使用ReactDOM渲染根组件中的内容到 id=root的div中去
ReactDOM.render(<App />,document.getElementById("root"))