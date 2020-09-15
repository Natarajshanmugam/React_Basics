import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Nataraj','Clark','Diana','Nataraj']
    const namelist = names.map(name => <h2>{[name]}</h2>)
    // const namelist = names.map((name,index) => <h2 key={index}>{index} {[name]}</h2>)
    const persons = [
        {
            id:1,
            name:'Nataraj',
            age:21,
            skill:'Developer'
        },
        {
            id:2,
            name:'Nanban',
            age:22,
            skill:'Marketing'
        },
        {
            id:3,
            name:'Nanbi',
            age:23,
            skill:'Phramacisit'
        },

    ]
    // const personlist = persons.map(person => <Person key={person.id} person={person} />)
    // const personlist = persons.map(person => <Person key={person.name} person={person} />)
  return (
    <div>
      { /* Worst Method
       <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}


      {/* { Best Method
          names.map(name => <h2>{[name]}</h2>)
      } */}


     {/* Best Method  */}
     {/* {personlist} */}
     {namelist}
    </div>
  )
}

export default NameList