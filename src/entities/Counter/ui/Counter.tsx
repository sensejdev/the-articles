import { Button } from "shared/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "entities/Counter/model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const inc = () => {
    dispatch(counterActions.increment());
  };

  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={inc}>
        inc
      </Button>
      <Button data-testid="decrement-btn" onClick={dec}>
        dec
      </Button>
    </div>
  );
};
