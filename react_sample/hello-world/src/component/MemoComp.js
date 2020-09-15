import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo comp')
  return (
    <div>
      {name}
    </div>
  )
}
export default React.memo(MemoComp)