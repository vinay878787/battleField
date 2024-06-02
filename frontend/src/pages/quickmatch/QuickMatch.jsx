import { useEffect, useState } from "react";
import styles from "./QuickMatch.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function QuickMatch() {
  const [battleTypes, setBattleTypes] = useState([]);

  const fetchBattleData = async () => {
    const battleData = await axios.get("http://localhost:3000/quickmatch");
    setBattleTypes(battleData.data.message);
  };
  useEffect(() => {
    fetchBattleData();
  }, [battleTypes]);
  return (
    <div className={styles.quickMatchContainer}>
      <div className={styles.quickMatchSubContainer1}>
        <div className={styles.battleFieldIcons}>
          <NavLink to="/">
            <img
              src="/battleField1Img.png"
              className={styles.navIcons}
              alt="battleField1Img"
              title="BATTLEFIELD V"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="/battleField2Img.png"
              className={styles.navIcons}
              alt="battleField2Img"
              title="BATTLEFIELD 1"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="/battleField3Img.png"
              className={styles.navIcons}
              alt="battleField3Img"
              title="BATTLEFIELD 4"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="/battleField4.png"
              className={styles.navIcons}
              alt="battleField4Img"
              title="BATTLEFIELD HARDLINE"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="/battleField5Img.png"
              className={styles.navIcons}
              alt="WATCH"
              title="CAREER"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="/watch.svg"
              className={styles.navIcons}
              alt="NEWS"
              title="WATCH"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src="/news.svg"
              className={styles.navIcons}
              alt="news"
              title="NEWS"
            />
          </NavLink>
        </div>

        <div className={styles.additionalFeatureIcons}>
          <NavLink to="/">
            <img
              src="/side-menu__help.png"
              className={styles.featureIcons}
              alt="help"
              title="HELP"
            />
          </NavLink>

          <NavLink to="/">
            <img
              src="/side-menu__quit.png"
              className={styles.featureIcons}
              alt="quit"
              title="QUIT"
            />
          </NavLink>
        </div>
      </div>
      <div className={styles.quickMatchSubContainer2}>
        <div className={styles.heading}>
          <div className={styles.headingSubContainer}>
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg"
            className={styles.arrow}
          ></img>
          <div className={styles.heading1}>MULTIPLAYER /</div>
          </div>

          <div className={styles.heading2}>QUICKMATCH</div>
        </div>
        <div className={styles.battleTypes}>
          {battleTypes.map((battleItem) => (
            <ul key={battleItem.id} className={styles.battleItem}>
              <li className={styles.battleTitle}>{battleItem.title}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.quickMatchSubContainer3}>3</div>
      <div className={styles.quickMatchSubContainer4}>4</div>
    </div>
  );
}

export default QuickMatch;
