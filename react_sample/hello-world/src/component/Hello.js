import React from 'react'

const Hello = () => {
    // return (
    //     <div className="dummyClass">Hello Nataraj</div>
    // )
    return React.createElement(
    'div',
    {id: 'HELLO',className:'dummyClass'},
    React.createElement('h1',null,'Hello Nataraj')
    )
}
export default Hello