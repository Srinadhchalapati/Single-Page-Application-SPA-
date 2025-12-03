export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
