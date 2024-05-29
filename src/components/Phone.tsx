import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type PhoneProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string,
  dark?: boolean
}

export default function Phone({
  className,
  imgSrc,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div {...props} className={cn("relative pointer-events-none z-50 overflow-hidden", className)}>
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"}
        alt=""
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <img
        src={imgSrc}
        alt=""
        className="object-cover min-w-full min-h-full"
        />
      </div>
    </div>
  )
}
