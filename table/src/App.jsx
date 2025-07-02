import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useState } from "react";

function App() {
  const [columnState, setColumnState] = useState({
    column: "id",
    visible: true
  });

  const data = [
    { id: 1, name: "Sarthak", email: "sarthak@email.com", password: "1234" },
    { id: 2, name: "Raj", email: "raj@email.com", password: "5678" },
    { id: 3, name: "Meera", email: "meera@email.com", password: "abcd" }
  ];

  const handleArrowClick = (column) => {
    if (columnState.column == column) {
      setColumnState({
        column: column,
        visible: !columnState.visible
      });
    } else {
      setColumnState({
        column: column,
        visible: true
      });
    }
  };

  const getArrowIcon = (column) => {
    let icon;
    if (columnState.column === column) {
      if (columnState.visible) {
        icon = <FaArrowDown />;
      } else {
        icon = <FaArrowUp />;
      }
    } else {
      icon = <FaArrowDown />;
    }
    return icon;
  };

  let rowsToShow = [];
  if (columnState.visible) {
    rowsToShow = data;
  }

  return (
    <div align="center">
      <h1>Table</h1>
      <table border={1} cellPadding={10} cellSpacing={0} style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>
              id
              <span
                onClick={() => handleArrowClick("id")}
                style={{ cursor: "pointer", fontSize: "20px", marginLeft: "5px" }}>
                {getArrowIcon("id")}
              </span>
            </th>
            <th>
              name
              <span
                onClick={() => handleArrowClick("name")}
                style={{ cursor: "pointer", fontSize: "20px", marginLeft: "5px" }}>
                {getArrowIcon("name")}
              </span>
            </th>
            <th>
              email
              <span
                onClick={() => handleArrowClick("email")}
                style={{ cursor: "pointer", fontSize: "20px", marginLeft: "5px" }}>
                {getArrowIcon("email")}
              </span>
            </th>
            <th>
              password
              <span
                onClick={() => handleArrowClick("password")}
                style={{ cursor: "pointer", fontSize: "20px", marginLeft: "5px" }}>
                {getArrowIcon("password")}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;