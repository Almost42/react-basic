import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 传递html
function Layout({ children }) {
    return (
        <div className="layout">
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
}

function AppOfHtml() {
    return (
        <Layout>
            <h1>Welcome to My App</h1>
            <p>This is the main content.</p>
        </Layout>
    );
}

// 传递Jsx
function Card({ title, content }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

function AppOfJsx() {
    return (
        <Layout>
            <Card title="Card 1" content="This is the first card." />
            <Card title="Card 2" content="This is the second card." />
        </Layout>
    )
}

// 传递函数
function UserInfo({ children }) {
    const user = { name: "Almost", age: 42 }
    return (
        <>
            <h5>用户信息</h5>
            <p>{children(user)}</p>
        </>
    )
}

function AppOfFunction() {
    return (
        <UserInfo>
            {(user) => (
                <div>
                    <h5>Welcome, {user.name}</h5>
                    <h6>You are {user.age} years old.</h6>
                </div>
            )}
        </UserInfo>
    )
}

// 传递列表
function TodoList({ children }) {
    return (
        <div className="todoList">
            <h5>This is a todo list</h5>
            <ul>
                {React.Children.map(children, (child, index) => (
                    <li key={index} className="todolist-item">
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function AppOfChildren() {
    return (
        <TodoList>
            <h6>work</h6>
            <h6>study</h6>
            <h6>play</h6>
        </TodoList>
    )
}

root.render(
    <>
        <AppOfHtml /><hr />
        <AppOfJsx /><hr />
        <AppOfFunction /><hr />
        <AppOfChildren /><hr />
    </>
)