/* eslint-disable react/prop-types */
import "./ComplexSearch.css";
import Filter from "./Filter.jsx";
import SearchField from "./Searchfield.jsx";

const ComplexSearch = ({ search, setSearch }) => {
  return (
    <section className="ComplexSearch">
      <SearchField setSearch={setSearch} search={search} />
      <Filter />
    </section>
  );
};

export default ComplexSearch;
