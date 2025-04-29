import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, onSearch, placeholder }: SearchInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
      <Button 
        onClick={onSearch}
        className="w-full bg-gray-800 hover:bg-gray-700"
      >
        Search
      </Button>
    </div>
  );
} 