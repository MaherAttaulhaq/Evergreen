"use client";

import React, { useState, forwardRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/libs/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const CustomSlider = forwardRef(
  ({ className, showTooltip = true, ...props }, ref) => {
    const [values, setValues] = useState(
      props.defaultValue || props.value || [0]
    );
    const [activeThumbIndex, setActiveThumbIndex] = useState(null);

    const handleValueChange = (newValues) => {
      setValues(newValues);
      if (props.onValueChange) {
        props.onValueChange(newValues);
      }
    };

    const handlePointerDown = (index) => {
      setActiveThumbIndex(index);
    };

    const handlePointerUp = () => {
      setTimeout(() => setActiveThumbIndex(null), 100);
    };

    return (
      <TooltipProvider>
        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
          onValueChange={handleValueChange}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary" />
          </SliderPrimitive.Track>
          {values.map((value, index) => (
            <Tooltip
              key={index}
              open={showTooltip && activeThumbIndex === index}
            >
              <TooltipTrigger asChild>
                <SliderPrimitive.Thumb
                  className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  onPointerDown={() => handlePointerDown(index)}
                  onPointerUp={handlePointerUp}
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="text-sm">
                {value}
              </TooltipContent>
            </Tooltip>
          ))}
        </SliderPrimitive.Root>
      </TooltipProvider>
    );
  }
);

CustomSlider.displayName = "CustomSlider";
