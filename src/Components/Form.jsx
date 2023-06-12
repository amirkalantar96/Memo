import { userContext } from "../App";
import { useContext } from "react";

function Form({input, setInput, idNumber, setIdNumber}) {
    const [memo, setMemo] = useContext(userContext);

    const handleSubmit = (e) => {
      e.preventDefault();

      if(idNumber === -1) {
        setMemo(
          memo.concat({
            id: Math.floor(Math.random() * 1001),
            title: input
          })
        );
        setInput("");
      } else {
        setMemo(
          memo.map(item => {
            if(item.id === idNumber) {
              return {...item, title: input}
            }
            return item;
          })
        );
        setInput("");
        setIdNumber(-1);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 mt-3 d-flex">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control order-2"
            required
          />
          <input
            type="submit"
            value="+"
            className="btn btn-success order-1"
          />
        </div>
      </form>
    );
}

export default Form;
