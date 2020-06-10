import React from 'react'
import CakeComponent from '../../components/CakeComponent/CakeComponent'
import DonutComponent from '../../components/DonutComponent/DonutComponent'

const BakeryContainer = () => {
  return (
    <div className="bakeryContainer">
      <br />
      <CakeComponent />
      <br /><hr /><br />
      <DonutComponent />
    </div>
  )
}

export default BakeryContainer
