import { render } from '@testing-library/react';
import React from 'react';
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
  addIngredientHandler = (name) =>{
    this.setState({
      ingredients: [...this.state.ingredients, name]
    })
  }

  render() {
    return (
      <div>
        <hr></hr>
        <h5>菜单：</h5>
          <button onClick={()=>this.addIngredientHandler("珍珠")}>珍珠</button>
          <button onClick={()=>this.addIngredientHandler("芋泥")}>芋泥</button>
          <button onClick={()=>this.addIngredientHandler("葡萄干")}>葡萄干</button>
        <h5>订单：</h5>
        <ul>
          {
            this.state.ingredients.map((m)=>(
              <li key={m}>{m}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}


root.render(
  <div>
    <HelloFunctionComponenet />
    <HelloClassComponent />
    <JumpIndexComponent />
    <VolumeChooseComponent />
    <CountComponent />
    <IngredientsComponent/>
  </div>
);