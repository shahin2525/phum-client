import { ReactNode } from "react";

export type TSideBarItem =
  | {
      key: string | undefined;
      label: ReactNode;
      children?: TSideBarItem[];
    }
  | undefined;

export type TUserRoute = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserRoute[];
};
// type TRoute = {
//   path: string;
//   element: ReactNode;
// };
