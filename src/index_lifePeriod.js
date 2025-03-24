import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


class Parent extends React.Component {
    // 创建组件时，最先执行，初始化的时候只执行一次
    constructor() {
        super();
        console.log("constructor...创建组件时，最先执行，初始化的时候只执行一次");
    }
    // 组件挂载（完成 DOM 渲染）后执行，初始化的时候执行一次
    componentDidMount() {
        console.log("componentDidMount...组件挂载（完成 DOM 渲染）后执行，初始化的时候执行一次");
    }
    // 组件更新后（DOM 渲染完毕）
    componentDidUpdate() {
        console.log("componentDidUpdate...组件更新后（DOM 渲染完毕）");
    }

    state = {
        count: 0,
        flag: true
    };
    handleClick = () => {
        console.log("计数器函数调用");
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        });
    };
    handleClickVisible = () => {
        console.log("切换组件状态函数调用");
        this.setState({
            ...this.state,
            flag: !this.state.flag,
        });
    };
    render() {
        console.log("render...每次组件渲染都会触发");
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.count}</button>
                <button onClick={this.handleClickVisible}>点击切换子组件状态</button>
                {this.state.flag && <Son/>}
            </div>
        );
    }
}

class Son extends React.Component {
    // 组件卸载（从页面中消失）
    componentWillUnmount() {
        console.log("子组件：componentWillUnmount...组件卸载（从页面中消失）");
    }
    render() {
        return <div>子组件展示中...</div>
    }
}

root.render(
    <>
        <Parent />
    </>
)