import React from 'react'

function NameList() {
    const names = ["Rahul","Mic","Anki"]
    return (
        <div>
            {
                names.map(name=> <h2>{name}</h2>)
            }
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
