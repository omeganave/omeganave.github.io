import React from 'react'

// The badge that displays how many items are in the cart. Accepts a number parameter, which corresponds to how many items are in the cart.
const Badge = ({ num }) => {
  return (
    <div className='badge'>{num}</div>
  )
}

export default Badge