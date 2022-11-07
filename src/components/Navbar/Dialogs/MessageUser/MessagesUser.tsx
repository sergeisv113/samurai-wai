import React from 'react';

type MessageItemType = {
    id?: number;
    message: string;
}

const Message = (props: MessageItemType) => {

    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}

export default Message;
