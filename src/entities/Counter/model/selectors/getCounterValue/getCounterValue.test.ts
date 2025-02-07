import { getCounterValue } from "entities/Counter/model/selectors/getCounterValue/getCounterValue";
import { StateSchema } from "app/providers/StoreProvider";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

describe("getCounterValue.test", () => {
  test("", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
