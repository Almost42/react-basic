import React,{ createContext } from 'react';
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))

const { Provider, Consumer } = createContext();

// 使用 provider 与 consumer 进行跨组件通信
class ParentComponent extends React.Component {
    state = {
        parentStatus: "父组件状态"
    }
    render() {
        return (
            <Provider value={this.state.parentStatus}>
                <div>
                    this is parent.
                    <AComponent/>
                </div>
            </Provider>

        );
    }
}


class AComponent extends React.Component {
    render() {
        return (
            <div>
                this is A
                <CComponent />
            </div>
        );

    }
}


class CComponent extends React.Component {
    render() {
        return (
            <div>
                this is C, 
                <Consumer>
                    {(value)=><b>{value}</b>}
                </Consumer>
            </div>
        );

    }
}

root.render(
    <div>
        {/* <ParentComponent /> */}
    </div>
);  

