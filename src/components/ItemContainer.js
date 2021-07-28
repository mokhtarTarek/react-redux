import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream,buyCake } from '../redux'
//thsi container is usedd for both cake and iceCream
function ItemContainer(props) {
    return (
        <div>
            <h2>item - {props.item} </h2>
            <button onClick={props.buyItem} >Buy Item</button>
        </div>
    )
}
//conditionaly assign the redux state
const mapStateToProps = (state, ownProps)=>{
    const itemState = ownProps.cake
    ?state.cake.numOfCakes:
    state.iceCream.numOfIceCream
    return{
        item:itemState
    }
}
const mapDispatchTpProps = (dispatch, owneProps)=>{
    const dispatchFunction = owneProps.cake
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyIceCream())
    return{
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchTpProps)(ItemContainer)
//export default connect(null,mapDispatchTpProps)(ItemContainer) :just dispatch
