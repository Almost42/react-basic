import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));


function HelloFunctionComponenet() {
  const clickHandler = () => {
    alert("Function Clicked")
  }
  return (
    <button onClick={clickHandler}>函数点击</button>
  )
}

class HelloClassComponent extends React.Component {
  clickHandler = () => {
    alert("Class Clicked")
  }
  render() {
    return <button onClick={this.clickHandler}>Class点击</button>
  }
}

class JumpIndexComponent extends React.Component {
  indexUrlClick = (e) => {
    e.preventDefault();
    alert("即将跳转")
  }
  render() {
    return <a onClick={this.indexUrlClick} href='https://baidu.com'>跳转主页</a>
  }
}

class VolumeChooseComponent extends React.Component {
  volumeList = [
    { name: "Slepping", weight: 1 },
    { name: "Driving", weight: 3 },
    { name: "Party", weight: 5 },
  ]

  sceneHandler = (e, weight) => {
    e.preventDefault()
    alert("volume turn to" + weight)
  }

  render() {
    return (
      <div>
        <hr></hr>
        <h3>Choose a Volume: </h3>
        <ul>
          {
            this.volumeList.map((song) => (
              <button key={song.name} onClick={
                (e) => {
                  this.sceneHandler(e, song.weight)
                }
              }>{song.name}</button>
            ))
          }
        </ul>
      </div>
    )
  }
}

class CountComponent extends React.Component {
  state = {
    sugarCount: 0,
    iceCount: 0
  }

  countClickHandler = (i) => {
    if (i == 'sugar') {
      this.setState({
        sugarCount: this.state.sugarCount + 1
      })
    }
    if (i == 'ice') {
      this.setState({
        iceCount: this.state.iceCount + 1
      })
    }
    alert(i + " added!")
  }
  render() {
    return (
      <div>
        <hr></hr>
        <div>{this.state.sugarCount}分糖,{this.state.iceCount}分冰</div>
        <button id="sugar" onClick={(e) => (
          this.countClickHandler("sugar")
        )}>➕🍬</button>
        <button id="ice" onClick={(e) => (
          this.countClickHandler("ice")
        )}>➕🧊</button>
      </div>
    )
  }
}

class IngredientsComponent extends React.Component {
  state = {
    ingredients: ["奶茶"]
  }
  addIngredientHandler = (name) => {
    this.setState({
      ingredients: [...this.state.ingredients, name]
    })
  }

  render() {
    return (
      <div>
        <hr></hr>
        <h5>菜单：</h5>
        <button onClick={() => this.addIngredientHandler("珍珠")}>珍珠</button>
        <button onClick={() => this.addIngredientHandler("芋泥")}>芋泥</button>
        <button onClick={() => this.addIngredientHandler("葡萄干")}>葡萄干</button>
        <button onClick={() => this.addIngredientHandler("芝士")}>芝士</button>
        <h5>订单：</h5>
        <ul>
          {
            this.state.ingredients.map((m) => (
              <li key={m}>{m}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

class FormComponent extends React.Component {

  state = {
    text: 'this is a msg.'
  }

  inputChange = (e) => {
    const value = e.target.value;
    console.log(value)
    this.setState = ({
      text: value
    })
  }

  render() {
    return (
      <div>
        <hr />
        <h5>{this.state.text}</h5>
        <div>
          <input type="text" value={this.state.text} onChange={this.inputChange} />
        </div>
      </div>
    )
  }
}

class InputDomComponent extends React.Component {
  msgRef = createRef();
  clickHandler = () => {
    console.log(this.msgRef.current.value);
  }

  render() {
    return (
      <>
        <input ref={this.msgRef} />
        <button onClick={this.clickHandler}>hello</button>
      </>
    )
  }
}

class SonClassComponent extends React.Component {
  statusChange = (status) => {
    this.props.status(status)
  }
  render() {
    return (
      <>
        {this.props.navi}
        <div>我是类子组件，{this.props.msg}</div>
        <ul>
          {this.props.list.map(
            (item, index) => {
              return <li key={index}>{item}</li>
            }
          )}
        </ul>
        <button onClick={this.props.alert}>点击调用父组件</button>
        <button type='button' onClick={() => this.statusChange('状态1')}>状态1</button>
        <button type='button' onClick={() => this.statusChange('状态2')}>状态2</button>
      </>
    )
  }
}
function SonFunctionComponent(props) {
  return <div>我是函数子组件，{props.msg}</div>
}

class ParentClassComponent extends React.Component {
  statusChangeHandler = (subTaskStatus) => {
    alert("当前子任务状态：" + subTaskStatus)
  }
  state = {
    msg: "msg from parent...",
    list: [1, 2, 3, 4],
    alert: () => {
      alert("父组件提示！")
    }
  }
  render() {
    return (
      <>
        <hr />
        <SonClassComponent msg={this.state.msg}
          list={this.state.list}
          alert={this.state.alert}
          status={this.statusChangeHandler}
          navi={<div>父组件的导航组件 </div>} />

        {/* <SonFunctionComponent msg={this.state.msg} /> */}
      </>
    )
  }
}

class BroAceComponent extends React.Component {
  dinnerChoose = (text) => {
    this.props.dinnerSuggestion(text)
  }
  render() {
    return (
      <>
        <div>老大：{this.props.dinner}</div>
        <button onClick={() => this.dinnerChoose(prompt("老大今天决定吃..."))}>有个想法</button>
      </>
    )
  }
}

class BroBravoBomponent extends React.Component {
  dinnerChoose = (text) => {
    this.props.dinnerSuggestion(text)
  }
  render() {
    return (
      <>
        <div>老二：{this.props.dinner}</div>
        <button onClick={() => this.dinnerChoose(prompt("老二今天决定吃..."))}>有个想法</button>
      </>

    )
  }
}

class DaddyComponent extends React.Component {
  state = {
    dinner: "今天吃什么"
  }
  msgReceive = (dinnerChoice) => {
    this.setState ({
      dinner: "今天吃" + dinnerChoice
    })

  }
  render() {
    return (
      <div>
        <BroAceComponent dinner={this.state.dinner} dinnerSuggestion={this.msgReceive} />
        <hr />
        <BroBravoBomponent dinner={this.state.dinner} dinnerSuggestion={this.msgReceive} />
      </div>
    )
  }
}




root.render(
  <div>
    {/* <HelloFunctionComponenet />
    <HelloClassComponent />
    <JumpIndexComponent />
    <VolumeChooseComponent />
    <CountComponent />
    <IngredientsComponent /> */}
    {/* <FormComponent /> */}
    {/* <InputDomComponent/> */}
    {/* <ParentClassComponent /> */}
    {/* <DaddyComponent /> */}
  </div>
);