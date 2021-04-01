import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { Table, TableSettings } from './components';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [search, setSearch] = useState('');

  const fetchData = useCallback((filter, order) => {
    axios.get(`http://localhost:8000/data?_sort=${filter}&_order=${order}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChangeRadio = ({ target }) => {
    setSelectedFilter(target.value);
    const order = target.value === 'shootingTotal' ? 'desc' : 'asc';
    fetchData(target.value, order);
  };

  useEffect(() => {
    fetchData('rank', 'asc');
  }, [fetchData]);

  return (
    <div className="wrapper">
      <TableSettings
        search={search}
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        handleChangeRadio={handleChangeRadio}
      />
      {isLoading ? <span>loading...</span> : <Table data={data} search={search} />}
    </div>
  );
};

export default App;
