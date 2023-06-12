import { useContext } from "react";
import { userContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Items({input, setInput, idNumber, setIdNumber}) {
    const [memo, setMemo] = useContext(userContext);

    const editHandler = (valueId) => {
        setInput(input = memo.find(item => item.id === valueId).title);
        setIdNumber(idNumber = valueId);
    };

    const deleteHandler = (valueId) => {
        setMemo(memo.filter(item => item.id !== valueId));
    };

    return (
        <div className="list-group">
            {memo.map(items => {
                return <div className="list-group-item d-flex justify-content-between overflow-auto"
                            key={items.id}
                        >
                    <div className="d-flex align-items-center">
                        <span>{items.title}</span>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary m-1"
                          onClick={() => editHandler(items.id)}
                        ><FontAwesomeIcon icon={faPenToSquare} /></button>

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger m-1"
                          onClick={() => deleteHandler(items.id)}
                        ><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>;
            })}
        </div>
    );
}

export default Items;
