import Categories from "./Categories";
import Sorting from "./Sorting";
import styles from './Menu.module.scss'

export default function Menu(){
  return (
    <div className={styles.stylesMenu}>
      <Categories />
      <Sorting />
    </div>
  )
}