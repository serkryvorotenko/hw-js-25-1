import React from "react";

export class TodoItem extends React.Component {

    constructor() {
        super();
        this.state = {
            done: false
        }

    }

    inputOnChange = () => {
        this.setState({
            done:!this.state.done
        })
    }

    render() {
        return <div className='todo__item'>
            <p className='todo__item-text'>{this.props.children}</p>
            <input className='todo__item-input' type={"checkbox"} onChange={this.inputOnChange}/>
            <p className='todo__item-status'>{this.state.done?'Выполнено':'Не выполнено'}</p>

        </div>
    }
}

