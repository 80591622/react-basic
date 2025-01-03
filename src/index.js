import React from 'react';
import ReactDOM from 'react-dom/client'; // 注意：React 18 使用 'react-dom/client'

// import App from './App'; // 引入 App 组件
import TodoList from './TodoList'

// 获取根节点
const rootElement = document.getElementById('root');

// 使用 createRoot 渲染应用
const root = ReactDOM.createRoot(rootElement);
root.render(<TodoList />);


