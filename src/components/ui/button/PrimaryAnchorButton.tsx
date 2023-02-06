import clsx from "clsx";
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon";
import { ButtonProps } from "./utils/type";

export default function PrimaryAnchorButton({
  children,
  className,
  href,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "text-white flex items-center gap-x-2 py-[.875rem]",
        className
      )}
    >
      {children}
      <ArrowRightIcon />
    </a>
  );
}
