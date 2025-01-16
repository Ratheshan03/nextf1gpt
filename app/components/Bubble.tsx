import React from 'react'

const bubble = ({message}) => {
    const { content, role} = message;

  return (
    <div className={`${role} bubble`}>
        {content}
    </div>
  )
}

export default bubble
