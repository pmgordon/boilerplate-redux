import { useSelector, useDispatch } from 'react-redux';

import {
    increment,
    selectCount
} from "./clickerSlice"

export function Clicker() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="card">
    <div className="card-body">
      <div className="container">
        <div className="row">
          <div className="col">
            <button onClick={() => dispatch(increment())} type="button" className="btn btn-primary">Click Me</button>
          </div>
          <div className="col">
            Clicked The Button {count} times...
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
