import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import DataTable from "./component/DataTable";

const columns = [
  { label: "ID", cell: (dataItem) => dataItem.id },
  { label: "Name", cell: (dataItem) => dataItem.name },
  { label: "Email", cell: (dataItem) => dataItem.email },
  { label: "Body", cell: (dataItem) => dataItem.body },
];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Data Table</h1>
        <div className="Table-container">
          <DataTable data={data} columns={columns} />
        </div>
      </header>
    </div>
  );
}

export default App;
