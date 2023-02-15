import React from 'react'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({name}) => {
  return (
    <div className='messageContainer'>
      <h2 className='message'>{name}</h2>
    </div>
  )
}

export default ItemListContainer