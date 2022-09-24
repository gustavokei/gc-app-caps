import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GlobalContext } from "../../models/global-provider";
import chartypeData from "../characters/char-selector-data";
import styles from "./content.module.scss";
import axios from "axios";

const TableWin = () => {
  // Global context for char-selector component
  let { state } = useContext(GlobalContext);

  // Set initial value for character count
  let count = 1;

  // Get Character data from API
  const url =
    "https://dportal.onrender.com/api/" +
    "rank/win/" +
    chartypeData[state.char].ctype;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
  }, [state.char]);

  const renderTable = () => {
    return data.map((Character) => {
      return (
        <tr key={count} className={styles.customTable}>
          <td>{count++}</td>
          <td>{Character.Login}</td>
          <td>{chartypeData[state.char].name}</td>
          <td>{Character.Win}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Table bordered hover variant="dark">
        <thead>
          <tr className={styles.customTable}>
            <th>#</th>
            <th>Nickname</th>
            <th>Character</th>
            <th>Win</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
    </div>
  );
};

export default TableWin;
