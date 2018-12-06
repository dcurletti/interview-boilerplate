import Link from "next/link";
import { connect } from "react-redux";
import { increment } from "../actions";


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
  return { counter: state.counter };
}

export default connect(state => state)(Page);
