import React from 'react'
import className from 'classnames'

import AddUserContainer from './container'

const AddUser = (props) => {
    return (
        <>
            {(props.isSuccess == true || props.error != null) && (
                <div 
                    className={
                        className('alert', { 
                            'alert-success': props.isSuccess, 
                            'alert-danger': props.error != null
                        })
                    }
                >
                    {props.isSuccess ? 'Berhasil!' : props.error}
                </div>
            )}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter name"
                    value={props.name} 
                    onChange={(e) => props.setName(e.target.value)}
                />
            </div>
            <button type="submit" disabled={props.isLoading} className="btn btn-primary" onClick={props.handleSave}>Save</button>
        </>
    )
}

export default AddUserContainer(AddUser)