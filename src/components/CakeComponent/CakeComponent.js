import React from 'react'
import { buyCake } from '../../redux';
import { connect } from 'react-redux';

const CakeComponent = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Cake Shop</h1>
      <h5>Number Of Cakes : {props.numOfCakes}</h5>
      <button className="btn btn-primary" onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent);
