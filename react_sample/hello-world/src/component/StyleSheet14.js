import React from 'react'
import './myStyle.css'

export default function StyleSheet14(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Style Sheet</h1>
    </div>
  )
}
