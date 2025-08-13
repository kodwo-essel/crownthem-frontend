import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChange, onSearch }: Readonly<SearchBarProps>) {
  return (
    <div className="relative w-full max-w-sm">
      <Input
        type="text"
        placeholder="Type event name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pr-12 pl-6 text-gray-500 h-10 rounded-full focus-visible:ring-2 focus-visible:ring-primary !placeholder-black/40" // add right padding so text doesn't overlap button
      />
      <Button
        type="button"
        size="icon"
        onClick={onSearch}
        className="absolute h-10 w-10 rounded-full right-0 top-1/2 -translate-y-1/2"
      >
        <Search className="w-6 h-6" />
      </Button>
    </div>
  );
}
