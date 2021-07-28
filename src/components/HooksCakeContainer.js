import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream } from '../redux'
//useSelector : similar to MapStateToProps function :acces state in the redux store
//see usage warning in redux docs
function HooksCakeContainer() {
    const [qte, setQte] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state =>state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
            <h2> Hooks num of cakes - {numOfCakes} </h2>
            <h2> Hooks num of Icecreams - {numOfIceCream} </h2>
            </div>

            <div>
            <input type='text'
             placeholder='Quantity'
             value = {qte}
             onChange={e=>setQte(e.target.value)}
             />
             </div>

             <div>
            <button 
            onClick={()=>dispatch(buyCake(qte))}
            >Buy cake</button>
            </div>

            <div>
            <button 
            onClick={()=>dispatch(buyIceCream(qte))}
            >Buy icecream</button>
            </div>

        </div>
        
    )
}

export default HooksCakeContainer
