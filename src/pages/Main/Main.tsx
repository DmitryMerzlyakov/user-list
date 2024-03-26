import { FC, useState } from "react";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import "./Main.css";

export const Main: FC = () => {
  const [isChange, setChange] = useState(false);

  const changeStyle = () => {
    setChange(!isChange);
  };
  return (
    <main className='main'>
      <aside className='aside'>
        <Button title='List' onClick={changeStyle} />
        <Button title=' Tiles' onClick={changeStyle} />
      </aside>

      <List isChange={isChange} />
    </main>
  );
};
