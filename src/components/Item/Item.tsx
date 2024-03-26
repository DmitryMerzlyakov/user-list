import { FC } from "react";
import "./Item.css";

interface IProps {
  name: string;
  email: string;
  phone: string;
  isChange: boolean;
}

export const Item: FC<IProps> = ({ name, email, phone, isChange }) => {
  return (
    <li className={`li ${isChange ? "" : "column"}`}>
      <p className='li_text'>{name}</p>
      <p className='li_text'>{email}</p>
      <p className='li_text'>{phone}</p>
    </li>
  );
};
