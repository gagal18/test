import React from 'react'

const toDo = (props) => {
    const name = props.user.displayName
    const id = props.user.uid
    console.log('TODO',props.user)
    console.log(id)
    return(
        <h1>{name}<br/>You are signed in</h1>
    )
}

export default toDo