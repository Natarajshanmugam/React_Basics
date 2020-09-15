import React from 'react'
export default function Columns() {
    const items = ['Nataraj','Lovwer','Bruce']
  return (
    // <div>
    //   <td>Name</td>
    //   <td>Nataraj</td>
    // </div>

    <React.Fragment>
        <td>Name</td>
        <td>Nataraj</td>
        <td>Name</td>
        <td>Nataraj</td>
    </React.Fragment>

//     <React.Fragment>
//         {
//         items.map(item => (
//             <React.Fragment key={items.id}>
//                 <h1>Title</h1>
//                 <p>{items.title}</p>
//             </React.Fragment>
//         ))
//         }
//         <td>Name</td>
//         <td>Nataraj</td>
//     </React.Fragment>
/* <>
<td>Name</td>
<td>Nataraj</td>
</> */
  )
}
