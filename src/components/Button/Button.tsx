import { FC } from "react";
import "./Button.css";

interface IProps {
  title: string;
  onClick: () => void;
}

export const Button: FC<IProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className='button'>
      {title}
    </button>
  );
};
