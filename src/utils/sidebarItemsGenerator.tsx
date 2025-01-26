import { NavLink } from "react-router-dom";
import { TSideBarItem, TUserRoute } from "../types";

export const sideBarItesGenerator = (items: TUserRoute[], role: string) => {
  const sideVarItems = items.reduce((acc: TSideBarItem[], item) => {
    if (item.name && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);
  return sideVarItems;
};
