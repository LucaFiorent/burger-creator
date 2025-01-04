import { FC, ReactNode } from "react";
import "./MyButton.css";

interface MyButtonProps {
  children: ReactNode | string;
  onClick: () => void;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <button className="myButtonStyle" onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
