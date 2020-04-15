import React from 'react';
import {addNewFeature} from '../actions/carActions'
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{addNewFeature}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state =>{
  return {
    feature: state.feature.name,
    price: state.feature.price
  }
}

export default connect( mapStateToProps, {addNewFeature})(AdditionalFeature);
