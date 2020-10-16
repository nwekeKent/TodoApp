import React from 'react';

const Todos = ({ todos,deleteTodo }) => {
    const todoList = todos.length ? (todos.map(todo => {
       
        return (
            <div className="bg-light mx-3" key={todo.id}>
                <ul className='list-group'>
                    <li className='list-group-item d-flex justify-content-between text-light bg-success' >{todo.content} <span onClick={() => {deleteTodo(todo.id)}} className='bg-danger px-1 text-light'>X</span></li>
                </ul>
            </div>  


            )



    })
    ) : (<p className='lead text-center'>You have no todos left</p>
        )
    
    
    return (
        <div className='my-todos'>
        {todoList}
        
        </div>

        )


}

export default Todos