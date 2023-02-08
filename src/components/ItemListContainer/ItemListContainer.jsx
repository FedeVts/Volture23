import React from 'react'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='messageContainer'>
      <h2 className='message'>{props.name}</h2>
    </div>
  )
}

export default ItemListContainer