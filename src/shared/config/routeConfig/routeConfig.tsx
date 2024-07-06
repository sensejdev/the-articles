import { RouteProps } from "react-router-dom";
import { Main } from "pages/Main";
import { About } from "pages/About";
import { NotFound } from "pages/NotFound";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
