import { useRef } from "react";
import { useDispatch } from "react-redux"
import { counterActions } from "./store/counter";
import { privacyAction } from "./store/privacy";


export default function Controle(){
    const inputElem = useRef();

    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch(counterActions.increment());
    }
    const handleDecrement = ()=>{
       dispatch(counterActions.decrement());
    }

    const handleAdd = ()=>{
        dispatch(counterActions.add({num:inputElem.current.value}));
        inputElem.current.value = ""
    }

    const handleSub = ()=>{
        dispatch(counterActions.subtract({num:inputElem.current.value}))
        inputElem.current.value = ""
    }

    const privacyToggle = ()=>{
        dispatch(privacyAction.toggle());
    }

    return (
       <> <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <button type="button" className="btn btn-danger" onClick={handleDecrement}>-1</button>
       <button type="button" className="btn btn-success" onClick={handleIncrement}>+1</button>
       <button type="button" className="btn btn-secondary" onClick={privacyToggle}>PRIVACY TOGGLE</button>
      </div>
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" style={{marginTop:"15px"}}>
       <input type="text" placeholder="Enter Number" style={{width:"120px"}} ref={inputElem}/>
       <button type="button" className="btn btn-warning" onClick={handleAdd}>Add</button>
       <button type="button" className="btn btn-dark" onClick={handleSub}>Subtract</button>
      </div>
      </>

      
    )
}