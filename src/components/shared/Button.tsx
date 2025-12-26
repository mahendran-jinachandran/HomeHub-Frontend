import { useNavigate } from "react-router-dom";

type ButtonType = "primary" | "secondary" | "default";
type TextColor = "default" | "text-secondary";

interface ButtonProps {
  buttonType: ButtonType;
  buttonText: string;
  color?: TextColor;
  icon?: React.ReactNode;
  navigateRoute?: string;
  buttonClickCallBack?: () => void;
  disabled?: boolean;
}

const Button = ({
  buttonType,
  buttonText,
  color,
  icon,
  navigateRoute,
  buttonClickCallBack,
  disabled,
}: ButtonProps) => {
  const buttonBuilder: Record<ButtonType, string> = {
    primary: "bg-primary text-white",
    default: "bg-white text-black",
    secondary: "",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateRoute && buttonClickCallBack) {
      buttonClickCallBack();
      navigate(navigateRoute);
    }

    if (navigateRoute) navigate(navigateRoute);
  };

  return (
    <div>
      <button
        className={`px-4 py-2 rounded-md font-light flex align-middle justify-center
          ${buttonBuilder[buttonType]} hover:cursor-pointer font-inter ${color}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {buttonText}
        <p className="flex justify-center items-center gap-0.5 pl-1">{icon}</p>
      </button>
    </div>
  );
};

export default Button;
