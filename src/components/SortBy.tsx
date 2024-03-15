const SortBy = () => {
  return (
    <div>
      <span>sort by:</span>
      <select name='sort-by' id='sort-by'>
        <option value='manual'>Featured</option>
        <option value='best-selling'>Best Selling</option>
        <option value='title-ascending'>Alphabetically, A-Z</option>
        <option value='title-descending'>Alphabetically, Z-A</option>
      </select>
    </div>
  );
};

export default SortBy;
