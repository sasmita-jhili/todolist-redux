import React, { useState } from 'react'

export const TodoForm = () => {

    const [addtodo, setAddtodo] = useState({
        title: '',
        note: ''
    })
    // const [inputData, setInputData] = useState({
    //     edittitle: '',
    //     editnote: ''
    // })
    const [allTodolist, setAllTodolist] = useState([])

    const handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        setAddtodo({ ...addtodo, [name]: value })

    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const newtodolist = { ...addtodo, id: new Date().getTime().toString(), }

        setAllTodolist([...allTodolist, newtodolist])
        // setInputData('')
        // console.log();
        setAddtodo({ title: '', note: '' })
    }
    const EditItem = (id) => {
        let newEdititem = allTodolist.find((elem) => {
            return elem.id === id
        })
        // const { title, note } = newEdititem
        console.log(newEdititem.title);
        // console.log(newEdititem.newtodolist.title, newEdititem.newtodolist.note);
        // setAddtodo(newEdititem.title = addtodo.title, newEdititem.note = addtodo.note)
    }

    const DeleteItem = (index) => {
        setAllTodolist(allTodolist.filter((item) => {
            return index !== item.id
        }))
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-8 todolist_app'>
                    <div className="header">
                        <h2 className="text-muted">TODO List</h2>
                        <hr />
                    </div>

                    <div >
                        <form onSubmit={onFormSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder='add title.....'
                                    type='text'
                                    name='title'
                                    value={addtodo.title}
                                    onChange={handleInput}
                                />
                                <textarea
                                    className="form-control"
                                    placeholder='add notes...'
                                    name="note"
                                    value={addtodo.note}
                                    onChange={handleInput}
                                />
                                <button className='btn btn-lg btn-success ' type='submit'>Add</button>
                            </div>
                        </form>
                        <div>
                            {allTodolist.map((elem) => {
                                const { title, note, id } = elem
                                return (
                                    <div className="form-group" key={id}>
                                        <h2>{title}</h2>
                                        <p>{note}</p>
                                        <button className='btn btn-warning btn-sm' onClick={() => EditItem(id)}>Edit</button>
                                        <button className='btn btn-danger btn-sm' onClick={() => DeleteItem(id)}>Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hangout with Friends 
call amel i haven't seen her for a while */}
        </div>


    )
}
