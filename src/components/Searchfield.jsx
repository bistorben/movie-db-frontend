import "./SearchField.css";

const SearchField = ({ search, setSearch }) => {
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="SearchField">
      <input type="text" value={search} onChange={inputHandler} />
    </div>
  );
};

export default SearchField;
