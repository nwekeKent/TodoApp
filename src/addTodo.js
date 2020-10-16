import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
            content:''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
         })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='my-3 container'>
                <div className='form-group'>
                    <label className='text-success text-italic'>Add new todo</label>
                    <input type='text' placeholder='Add New Todo' className='form-control ' onChange={this.handleChange} value={this.state.content}></input>
                    <button type='submit' className='btn btn-success mb-5 mt-2'>Add Todo</button>
                </div>

            </form>
           

        )

    }


}
export default AddTodo