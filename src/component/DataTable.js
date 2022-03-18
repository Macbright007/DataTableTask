import React from "react";
import ReactPaginate from "react-paginate";

const DataTable = ({ columns, data }) => {
  return (
    <>
      <table>
        <tr>
          {columns.map((col) => (
            <th key={col.label}>{col.label}</th>
          ))}
        </tr>
        <tbody>
          {data.map((dataItem) => {
            return (
              <tr key={dataItem.id}>
                {columns.map((col) => (
                  <td key={col.label}>{col.cell(dataItem)}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(event) => console.log(event)}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< previous"
        />
      </div>
    </>
  );
};

export default DataTable;
