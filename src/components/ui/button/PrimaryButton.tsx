import clsx from "clsx";
import PlayIcon from "@/components/ui/icons/PlayIcon";
import { ButtonProps } from "./utils/type";

export default function PrimaryButton({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-[.875rem] text-[#121608] bg-primary flex items-center gap-x-2",
        className
      )}
    >
      <PlayIcon />
      {children}
    </button>
  );
}
