import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { ReactNode } from "react";

interface CustomPopoverProps {
  label?: string;
  icon?: ReactNode;
  children: ReactNode;
}

const CustomPopover: React.FC<CustomPopoverProps> = ({
  label,
  icon,
  children,
}) => {
  return (
    <div>
      <Popover placement="bottom-start">
        <PopoverHandler>
          <button className="bg-gray-100 p-1 hover:bg-primary hover:text-white rounded-md text-xl">
            {icon ? icon : label}
          </button>
        </PopoverHandler>
        <PopoverContent className="p-2 bg-gray-100">{children}</PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomPopover;
