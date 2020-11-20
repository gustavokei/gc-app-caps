import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GlobalContext } from "../../models/global-provider";
import styles from "./content.module.scss";
import axios from "axios";

const FormEditCharacter = () => {
  // Global context for char-selector component
  let { state } = useContext(GlobalContext);
  let chartypeData = [
    {
      name: "Elesis Sieghart",
      jobs: ["Knight", "Spearman", "Sword Master", "Savior"],
      desc: "First character",
      ctype: 0,
    },
    {
      name: "Lire Eryuell",
      jobs: ["Archer", "Crossbowman", "Arch Ranger", "Nova"],
      desc: "Second character",
      ctype: 1,
    },
  ];

  // Set initial value for character count
  let count = 1;

  // Get Character data from API
  const url =
    process.env.NEXT_PUBLIC_API + "rank/exp/" + chartypeData[state.char].ctype;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
  }, [data]);

  const renderTable = () => {
    return data.map((Character) => {
      return (
        <tr className={styles.customTable}>
          <td>{count++}</td>
          <td>{Character.Login}</td>
          <td>{chartypeData[state.char].name}</td>
          <td>{Character.ExpS4}</td>
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
            <th>Exp</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
    </div>
  );
};

export default FormEditCharacter;
