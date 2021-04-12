import React from 'react'

function Message({children}) {
    return (
        <div>
            <div class="alert alert-danger" role="alert" >
                {children}
            </div>
        </div>
    )
}

export default Message
