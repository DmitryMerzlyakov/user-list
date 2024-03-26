import { FC } from "react";
import { Item } from "../Item/Item";
import { Users } from "../../data/Users";

import "./List.css";

interface IProps {
  isChange: boolean;
}

export const List: FC<IProps> = ({ isChange }) => {
  return (
    <ul className={`ul ${isChange ? "list" : "tiles "}`}>
      {Users.map((user) => (
        <Item
          key={user.id}
          name={user.name}
          phone={user.phone}
          email={user.email}
          isChange={isChange}
        />
      ))}
    </ul>
  );
};
