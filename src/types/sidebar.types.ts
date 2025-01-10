import { ReactNode } from "react";

export type TSideBarItem = {
  key: string;
  label: ReactNode;
  children?: TSideBarItem[];
};

export type TUserRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserRoute[];
};
// type TRoute = {
//   path: string;
//   element: ReactNode;
// };
