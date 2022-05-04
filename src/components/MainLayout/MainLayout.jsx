import styles from './MainLayout.module.css'
import {Filters} from "../Filters/Filters";

export const MainLayout = ({children}) => {

  return <div className={styles.main} >
    <div className={styles.container}>
    <div className={styles.leftCol}>
      <Filters />
    </div>
    <div className={styles.mainCol}>
      {children}
    </div>
    </div>
  </div>

}

