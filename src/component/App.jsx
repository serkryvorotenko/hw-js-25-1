import React from "react";
import {TodoItem} from "./TodoItem.jsx";


export class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todoList: [
                'todoList1', 'todoList2', 'todoList3'
            ],
            inputValue: ''
        }

    }

    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    onAddClick = () => {
        if (this.state.inputValue.length === 0)
            return
        this.setState({
            todoList: [...this.state.todoList, this.state.inputValue],
            inputValue: ''
        })
    }

    render() {
        return (
            <main>
                {this.state.todoList.map((item) => {
                    return <TodoItem>
                        {item}
                    </TodoItem>
                })}
                <>
                    <input type={"text"} onChange={this.onInputChange} value={this.state.inputValue}/>
                    <button onClick={this.onAddClick}>Add</button>
                </>
            </main>

        )
    }
}
