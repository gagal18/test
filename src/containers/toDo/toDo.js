import React from 'react'

const toDo = (props) => {
    const name = props.user.displayName
    console.log('TODO',props.user)
    return(
        <h1>{name}<br/>You are signed in</h1>
    )
}

export default toDo