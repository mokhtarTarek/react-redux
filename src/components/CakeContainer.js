import React, { useState } from "react";

import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  console.log(props);
  const [qte, setQte] = useState(1);
  //please always use event handler 
  const buyCakeHandler=()=>{
    props.buyCake(qte)
  }
  return (
    <div>
      <h2>Number of cakes - {props.numberOfCakes} </h2>
      <input
        type="text"
        placeholder="Quantity"
        value={qte}
        onChange={(e) => setQte(e.target.value)}
      />
      <button onClick={buyCakeHandler}>Buy Cake</button>
    </div>
  );
}
/*
to acces the redux state in this component
*/
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numOfCakes,
    
  };
};
//to acces the dispatch method of the redux store
const mapDispatchToProps = (dispatch) => {
  return{
       buyCake:  (qte)=>dispatch(buyCake(qte))
  }
//   return(bindActionCreators({
//     buyCake: (qte) => {buyCake(qte)}
// }, dispatch))
};
/*

*/
/*
 connect is a higer order component: connect this comp to
 the redux store
 this allow this component to receive an additional props
 called numberOfCakes wich reflect number of cake in the redux store
 same for buyCake 
*/
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
