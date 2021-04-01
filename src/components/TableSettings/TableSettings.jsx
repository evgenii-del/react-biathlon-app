import React from 'react';

const TableSettings = ({
  search, setSearch, selectedFilter, handleChangeRadio,
}) => {
  const handleChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="d-flex justify-content-between mb-3">
      <input type="text" className="form-control search-field" placeholder="Search..." value={search} onChange={handleChangeSearch} />
      <div className="d-flex">
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="filter-name">
            <input className="form-check-input" type="radio" name="filter" id="filter-name" value="name" checked={selectedFilter === 'name'} onChange={handleChangeRadio} />
            <span>Name</span>
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="filter-shooting">
            <input className="form-check-input" type="radio" name="filter" id="filter-shooting" value="shootingTotal" checked={selectedFilter === 'shootingTotal'} onChange={handleChangeRadio} />
            <span>Shooting</span>
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="filter-time">
            <input className="form-check-input" type="radio" name="filter" id="filter-time" value="result" checked={selectedFilter === 'result'} onChange={handleChangeRadio} />
            <span>Time</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TableSettings;
