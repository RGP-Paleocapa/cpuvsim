import React from 'react';

// Define the type for the props
type TableProps = {
  headerTitles: string[];
  bodyRows: string[][];
};

const Table: React.FC<TableProps> = ({ headerTitles, bodyRows }) => {
  // Determine the maximum number of columns in bodyRows
  const maxColumns = bodyRows.reduce((max, row) => Math.max(max, row.length), 0);

  // Calculate colSpan for each header cell
  const colSpan = Math.ceil(maxColumns / headerTitles.length);

  return (
<div className="overflow-x-auto relative">
  <table className="table">
    <thead className="thead">
      <tr>
        {headerTitles.map((title, index) => (
          <th
            key={index}
            className="py-3 px-6 whitespace-nowrap text-sm sm:text-base"
            colSpan={colSpan}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="tbody">
      {bodyRows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className="py-3 px-6 whitespace-nowrap text-sm sm:text-sm"
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Table;
