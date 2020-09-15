import React from 'react';

const Greet=(props) => {
    // props.name="NATARAJ" Cannot assign to read only property
    return(
        <div>
            <h1>HELLO ,{props.name}</h1>
            {props.children}
        </div>
    )
    }

// const Greet=({name}) => {
//     // props.name="NATARAJ" Cannot assign to read only property
//     return(
//         <div>
//             <h1>HELLO ,{name}</h1>
//             {/* {props.children} */}
//         </div>
//     )
//     }

//  const Greet= props => {
//      const {name} = props
//     // props.name="NATARAJ" Cannot assign to read only property
//     return(
//         <div>
//             <h1>HELLO ,{props.name}</h1>
//             {props.children}
//         </div>
//     )
//     }
export default Greet