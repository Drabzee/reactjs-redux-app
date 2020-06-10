import React from 'react'
import { buyDonut } from '../../redux';
import { connect } from 'react-redux';

const DonutComponent = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Donut Shop</h1>
      <h5>Number Of Donuts : {props.numOfDonuts}</h5>
      <button className="btn btn-primary" onClick={props.buyDonut}>Buy Donut</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfDonuts: state.donut.numOfDonuts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyDonut: () => dispatch(buyDonut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DonutComponent);
