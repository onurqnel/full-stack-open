const FilterInput = ({ filterValue, onFilterChange }) => {
  return (
    <div>
      Filter <input value={filterValue} onChange={onFilterChange} />
    </div>
  );
};

export default FilterInput;
