import './style.css'
import {useState} from "react";


function ToDo({todo, toggleTask, removeTask}) {
    const [state, setState] = useState("");
    const toggleAccordion = () => {
        setState(state === "" ? "line-through" : "");
    }

    return (


        <div className="card col-sm-7 m-3">
            <div className="card-body" key={todo.id}>
                <div className="d-flex">
                    <input onClick={toggleAccordion} className="form-check-input" type="checkbox" id="checkboxNoLabel"
                           value=""
                           aria-label="..."/>
                    <h5 className={`ms-5 ${state}`} id="container">{todo.task}</h5>
                    <button className="btn btn-danger ms-5" onClick={() => removeTask(todo.id)}>
                        X
                    </button>

                </div>


            </div>

        </div>


    )
}

export default ToDo;