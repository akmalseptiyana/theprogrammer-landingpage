import clsx from "clsx";
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon";
import { ButtonProps } from "./utils/type";

export default function SecondaryButton({
  children,
  className,
  withIcon,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-4 text-white bg-[#1c2021] flex items-center gap-x-2",
        className
      )}
    >
      {children}
      {withIcon ? <ArrowRightIcon /> : null}
    </button>
  );
}
