import React, { useEffect, useState } from 'react';

const Air = () => {
  const [airports, setAirports] = useState([]);

  const getAirports = () => {
    fetch("https://www.freetestapi.com/api/v1/airports")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAirports(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getAirports();
  }, []);

  return (
    <div>
      <h1 align="center" className="py-2">Airports API</h1>
      <table className="table table-bordered table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Latitude Longitude</th>
            <th>City</th>
            <th>Country</th>
            <th>Terminals</th>
            <th>services</th>
            <th>contact_info</th>
          </tr>
        </thead>
        <tbody>
          {
            airports.map((airport, index) => (
              <tr key={index}>
                <td>{airport.id}</td>
                <td>{airport.name}</td>
                <td>{airport.code}</td>
                <td>
                  {airport.location.latitude} , {airport.location.longitude}
                </td>
                <td>{airport.city}</td>
                <td>{airport.country}</td>
                <td>
                  {
                    airport.terminals.map((terminal, idx) => (
                      <table key={idx}>
                        <thead>
                          <tr>
                            <td>{terminal.name}</td>
                            <td>{
                              terminal.gates.map((gate, tdx) => (
                                <table key={tdx} className="px-4">
                                  <thead>
                                    <tr>
                                      <td className="px-4">{gate.gate_number} </td>
                                      <td>{gate.airlines.join(' , ')}</td>
                                    </tr>
                                  </thead>
                                </table>
                              ))
                            }</td>
                          </tr>
                        </thead>
                      </table>
                    ))}
                </td>
                <td>{airport.services.join(' , ')}</td>
                <td>{airport.contact_info.phone} ,<br></br> {airport.contact_info.email} ,<br></br> {airport.contact_info.website}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Air;