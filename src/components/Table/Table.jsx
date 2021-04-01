import React from 'react';

const Table = ({ data }) => (
  <table className="table">
    <thead className="table__thead">
      <tr className="table__tr">
        <th className="table__th">Rank</th>
        <th className="table__th">Bib</th>
        <th className="table__th">Name</th>
        <th className="table__th">Nationality</th>
        <th className="table__th">Shooting</th>
        <th className="table__th">Total</th>
        <th className="table__th">Result</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({
        rank, bib, name, nationality, shooting, shootingTotal, result,
      }) => (
        <tr key={rank}>
          <td>{rank}</td>
          <td>{bib}</td>
          <td>{name}</td>
          <td>{nationality}</td>
          <td>{shooting}</td>
          <td>{shootingTotal}</td>
          <td>{result}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
