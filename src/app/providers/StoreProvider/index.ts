import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export { StoreProvider } from "./ui/StoreProvider";
export { createReduxStore } from "./config/store";
export type { StateSchema } from "./config/StateSchema";

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
