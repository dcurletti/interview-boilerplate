import Link from "next/link";
import { connect } from "react-redux";
import { increment } from "../actions";
import { counterSelector } from "../selectors";


function Page({ counter, dispatch }) {
  return (
    <div>
      Page 1
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        {counter}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { counter: counterSelector(state) };
}

export default connect(mapStateToProps)(Page);
