import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
