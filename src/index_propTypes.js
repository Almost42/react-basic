import PropTypes from "prop-types";
import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


class Parent extends React.Component {
    colors = ["red", "blue"];
    render() {
        return (
            <div>
                <SonClass colors ={this.colors} />
            </div>
        );
    }
}
function SonFunction({ colors = ["e"] }) {
    const list = colors.map((item, index) => {
        return <li key={index}>{item}</li>;
    });
    return <ul>{list}</ul>;
}

class SonClass extends React.Component {
      // 类静态属性声明默认值
  static defaultProps = {
    colors: ["11111", "22222", "33333"],
  };
    render() {
        return (
            <ul>
                {this.props.colors.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        );
    }
}
root.render(
    <>
        <Parent />
    </>
)