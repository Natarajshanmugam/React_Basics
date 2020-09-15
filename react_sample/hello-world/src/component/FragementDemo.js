import React from 'react'

export default function FragementDemo() {
  return (
    <React.Fragment>
    <h1>Fragement Demo </h1>
    <p>this is describes fragement demo component</p>
    </React.Fragment>

    // Normal div tag give an warning when using p tag so use react fragement
    // <div>
    //     <h1>Fragement Demo </h1>
    // <p>this is describes fragement demo component</p>
    // </div>
  )
}
