import PropTypes from "prop-types";
import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


function Son(props) {
    const colorArr = props.colors;
    const list = colorArr.map((item, index) => {
        return <li key={index}>{item}</li>
    });
    return (
        <ul>            {list}        </ul>
    )
}
Son.propTypes = {
    colors: PropTypes.array
}

class Parent extends React.Component {
    static propTypes = {
        currentTime: PropTypes.number.isRequired // 确保 currentTime 是必填的数字
    }

    currentTime = this.props.currentTime;
    colors = ["red", "blue"];

    render() {
        return (
            <div>
                <Son colors={this.colors} />
            </div>
        );
    }
}



root.render(
    <>
        <Parent currentTime={Date.now()} /> 
    </>
)