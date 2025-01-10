import { ReactNode } from "react";
import { TUserRoute } from "../types";

type TRoute = {
  path: string;
  element: ReactNode;
};
export const routesGenerator = (items: TUserRoute[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.element && item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
