import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define the variant styles using cva
const inputVariants = cva(
  "flex w-full border-b bg-transparent px-3 py-1 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus:border-b focus:border-current disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-input",
        outline: "border-b border-gray-300 focus:border-gray-500 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

// Create the Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, ...props }, ref) => {
  return <input className={cn(inputVariants({ variant, className }))} ref={ref} {...props} />;
});

Input.displayName = "Input";

export { Input, inputVariants };
