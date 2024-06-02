import styles from "./QuickMatch.module.css";
import { NavLink } from "react-router-dom";

function QuickMatch() {
  return (
    <div className={styles.quickMatchContainer}>
      <div className={styles.quickMatchSubContainer1}>
        <div className={styles.battleFieldIcons}>
          <NavLink to="/">
            <img src="/battleField1Img.png" className={styles.navIcons} alt="battleField1Img"   />
          </NavLink>
          <NavLink to="/" >
            <img src="battleField2Img.png" className={styles.navIcons} alt="Image 2" />
          </NavLink>
          <NavLink to="/" >
            <img src="battleField3Img.png" className={styles.navIcons} alt="Image 3" />
          </NavLink>
          <NavLink to="/">
            <img src="battleField4.png"  className={styles.navIcons} alt="Image 4" />
          </NavLink>
          <NavLink to="/" >
            <img src="battleField5Img.png" className={styles.navIcons} alt="Image 5" />
          </NavLink>
          <NavLink to="/" >
          <img src="/watch.svg" className={styles.navIcons} alt="Image 5" />
        </NavLink>
        <NavLink to="/" >
        <img src="/news.svg" className={styles.navIcons} alt="Image 5" />
      </NavLink>
        </div>

        <div className={styles.additionalFeatureIcons}>
        <NavLink to="/" >
            <img src="/side-menu__help.png" className={styles.featureIcons} alt="help" />
          </NavLink>

          <NavLink to="/" >
            <img src="/side-menu__quit.png" className={styles.featureIcons} alt="quit" />
          </NavLink>
        </div>
      </div>
      <div className={styles.quickMatchSubContainer2}>2</div>
      <div className={styles.quickMatchSubContainer3}>3</div>
      <div className={styles.quickMatchSubContainer4}>4</div>
    </div>
  );
}

export default QuickMatch;
