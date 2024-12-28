import { Button } from "@material-tailwind/react";

interface CustomButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "outlined" | "filled";
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  type = "button",
  variant = "filled",
  disabled = false,
  className,
  onClick,
}) => {
  return (
    <Button
      size="sm"
      disabled={disabled}
      onClick={onClick}
      type={type}
      fullWidth
      variant={variant}
      className={` font-medium ${
        variant === "filled"
          ? "bg-primary hover:bg-primary-500"
          : "text-primary border-primary border-2 font-semibold"
      } hover:shadow-none text-base capitalize ${className && className}`}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
