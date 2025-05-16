import React, { useState } from 'react'

const Count = (Wrapped) => {
    return () => {

        const [no, setNo] = useState(0);

        const [user] = useState([
            { name: "John", age: 25, phone: '111-111-1111' },
            { name: "Jane", age: 30, phone: '222-222-2222' },
            { name: "Alice", age: 35, phone: '333-333-3333' },
        ])

        const [alluser, setAllUser] = useState([]);

        const inc = () => {
            setNo(no + 1);
        }

        const dec = () => {
            setNo(no - 1);
        }

        const reset = () => {
            setNo(0);
        }

        const showuser = () => {
            setAllUser(user)
        }

        return (
            <Wrapped no={no} inc={inc} dec={dec} res={reset} showuserbtn={showuser} alluser={alluser} />
        )

    }
}

export default Count
