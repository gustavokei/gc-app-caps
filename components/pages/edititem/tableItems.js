import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styles from "./content.module.scss";
import axios from "axios";

const FormEditCharacter = () => {
  // Set initial value for character count
  let count = 1;
  const [LoginUid, setLoginUid] = useState("");

  // Get Character data from API
  const getitemurl = "https://api.devgames.app/api/" + "getitem/";
  const delitemurl = "https://api.devgames.app/api/" + "delitem/";
  const restoreitemurl = "https://api.devgames.app/api/" + "restoreitem/";

  const [data, setData] = useState([]);
  const [update, toggleUpdate] = useState(false);

  const delItem = (itemuid) => {
    axios.get(delitemurl + itemuid).then((response) => {
      toggleUpdate((update) => !update);
    });
  };

  const restoreItem = (itemuid) => {
    axios.get(restoreitemurl + itemuid).then((response) => {
      toggleUpdate((update) => !update);
    });
  };

  useEffect(() => {
    const UID = localStorage.getItem("UniqueID");
    setLoginUid(UID);
    axios.get(getitemurl + UID).then((json) => setData(json.data[0]));
  }, [update]);

  return (
    <div>
      <Table bordered hover variant="dark">
        <thead>
          <tr className={styles.customTable}>
            <th>ItemUID</th>
            <th>ItemName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            count++;
            return (
              <tr key={count} className={styles.customTable}>
                <td>{data.ItemUID}</td>
                <td>{data.GoodsName}</td>
                <td>
                  {data.DelState == 6 ? (
                    <Button onClick={() => restoreItem(data.ItemUID)}>
                      Restore
                    </Button>
                  ) : (
                    <Button
                      onClick={() => delItem(data.ItemUID)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FormEditCharacter;
