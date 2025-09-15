import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AppSelect({ label, items, onChange, defaultValue, name }) {
  return (
    <Select
      value={defaultValue}
      onValueChange={(e) => {
        onChange(name, e);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={`Select ${label}`}
          defaultValue={defaultValue}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
