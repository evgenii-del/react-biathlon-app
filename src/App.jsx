import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { Table } from './components';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(() => {
    axios.get('http://localhost:8000/data')
      .then((response) => setData(response.data))
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="main">
      {isLoading ? <span>loading...</span> : <Table data={data} />}
    </div>
  );
};

export default App;
