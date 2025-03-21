"use client";

import { TooltipProvider as CustomTooltipProvider } from "@/components/ui/tooltip";
import { TooltipProviderProps } from "@radix-ui/react-tooltip";

export function TooltipProvider({ children, ...props }: TooltipProviderProps) {
  return (
    <CustomTooltipProvider {...props} delayDuration={0}>
      {children}
    </CustomTooltipProvider>
  );
}
