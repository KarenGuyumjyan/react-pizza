import Header from '../components/Header/Header'
import styles from './Home.module.scss';
import Menu from "../components/Menu/Menu";

function HomePage() {
  return (
    <div className={styles.content}>
      <Header/>
      <Menu />
    </div>
  )
}

export default HomePage