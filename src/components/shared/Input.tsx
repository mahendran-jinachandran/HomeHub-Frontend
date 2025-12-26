import { forwardRef, type InputHTMLAttributes } from "react";

type InputType = "password" | "text" | "email" | "number";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon: boolean;
  rightIcon: boolean;
  label: string;
  error: string;
  helperText: string;
  placeHolder: string;
  inputType: InputType;
}

const Input = forwardRef(
  (
    {
      leftIcon,
      rightIcon,
      label,
      error,
      helperText,
      id,
      placeHolder,
      inputType,
      ...props
    }: Partial<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputId =
      id || `input-%${Math.random().toString(36).substring(2, 11)}`;
    return (
      <div>
        {label && (
          <label htmlFor={inputId} className="font-inter font-medium flex">
            {label}
          </label>
        )}

        <input
          type={inputType}
          {...props}
          className="font-inter border-gray-500 border rounded-b-sm"
          placeholder={placeHolder}
          ref={ref}
        />

        {error && (
          <span id={inputId} className="text-red-400">
            {error}
          </span>
        )}

        {helperText && (
          <span id={inputId} className="font-inter text-amber-200">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
