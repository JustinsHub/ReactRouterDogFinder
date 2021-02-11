import React from 'react'
import {useHistory} from 'react-router-dom'


const NotFound = () => {
    const history = useHistory()
    const homePage = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>Dog Not Found.</h1>
            <button onClick={homePage}>Go Back To Homepage</button>
        </div>
    )
}

export default NotFound