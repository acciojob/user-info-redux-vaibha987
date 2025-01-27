import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail, updateName } from './action'

const UserInfo = () => {

    const name = useSelector((state) => state.name)
    const email = useSelector((state) => state.email)

    const dispatch = useDispatch()

    return (
        <>
            <label htmlFor="username">Name:</label>
            <input
                type="text"
                name='username'
                id='username'
                onChange={(e) => dispatch(updateName(e.target.value))}
            />
            <br /><br />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />

            <p>Current values in store:</p>
            <div className='output'>
                <p>Name - {name}</p>
                <p>Email - {email} </p>
            </div>
        </>
    )
}

export default UserInfo
