import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function GoalForm() {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="containers" id="form">
      <section className="form">
        <form onSubmit={onSubmit}>
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn">Add Goal</button>
        </form>
      </section>
    </div>
  );
}

export default GoalForm;
