import { ReactNode } from "react";

// export type TSideBarItem =
//   | {
//       key: string | undefined;
//       label: ReactNode;
//       children?: TSideBarItem[] | undefined;
//     }
//   | undefined;
export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
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
