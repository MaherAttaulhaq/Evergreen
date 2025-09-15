"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import pb from "@/lib/pocketbase";

// Define the useDebounce hook outside the component
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Add onLocationSelect as a prop
export function AutoComplete({ onLocationSelect }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [locations, setLocations] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const debouncedInputValue = useDebounce(inputValue, 500);

  React.useEffect(() => {
    const fetchLocations = async () => {
      if (!debouncedInputValue) {
        setLocations([]);
        return;
      }

      setIsLoading(true);
      try {
        const result = await pb.collection("locations").getList(1, 10, {
          filter: `name ~ "${debouncedInputValue}"`,
        });
        setLocations(result.items);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocations();
  }, [debouncedInputValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? locations.find((location) => location.id === value)?.name
            : "Select a location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search location..."
            className="h-9"
            onValueChange={setInputValue}
          />
          <CommandList>
            {isLoading && (
              <div className="p-2 text-center text-sm text-muted-foreground">
                Loading...
              </div>
            )}
            {!isLoading && locations.length === 0 && (
              <CommandEmpty>No location found.</CommandEmpty>
            )}
            <CommandGroup>
              {!isLoading &&
                locations.map((location) => (
                  <CommandItem
                    key={location.id}
                    value={location.name}
                    onSelect={() => {
                      // Update local state
                      setValue(location.id === value ? "" : location.id);
                      setOpen(false);

                      // Call the parent's handler with the selected location's ID
                      if (onLocationSelect) {
                        onLocationSelect(location);
                      }
                    }}
                  >
                    {location.name}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === location.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
