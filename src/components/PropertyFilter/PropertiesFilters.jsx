import "./PropertiesFilter.css";

export function PropertiesFilters({ filters, setFilters }) {
  const sortOptions = [
    { value: "minPriceAsc", label: "Min price ↑" },
    { value: "maxPriceDesc", label: "Max price ↓" },
  ];

  const handleSortBy = (value) => {
    setFilters((prev) => ({ ...prev, sort: value }));
  };

  return (
    <div className="PropertiesFilter">
      <select
        value={filters.sort || ""}
        onChange={(e) => handleSortBy(e.target.value)}
      >
        <option value="">Sort by:</option>
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}