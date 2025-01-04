import { FC } from "react";
import "./Title.css";

interface TitleProps {
  title: string;
  type?: string;
}

const Title: FC<TitleProps> = ({ title, type }) => {
  return (
    <div className="titleStyle">
      {type === "h1" ? <h1>{title}</h1> : <h2>{title}</h2>}
    </div>
  );
};

export default Title;
