import Link from "next/link";
import { connect } from "react-redux";


function Page({}) {
  return (
    <div>
      Page 3
    </div>
  );
}

export default connect(state => state)(Page);
