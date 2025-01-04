import { FC } from "react";
import "./MyInput.css";

interface MyInputProps {
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  setInputValue: (props: string) => void;
}

const MyInput: FC<MyInputProps> = ({
  label,
  type,
  value,
  setInputValue,
  placeholder,
}) => {
  return (
    <div className="myInputWrapper">
      <label className="myInputLabel">{label}</label>
      <input
        className="myInputInput"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default MyInput;
