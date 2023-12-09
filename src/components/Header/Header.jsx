import styles from './Header.module.scss'
import LogoIcon from '../../assets/general/appLogo.svg'
import BasketIcon from '../../assets/icons/basket.svg'
export default function Header(){
  return (
    <div className={styles.header}>
      <div className={styles.stylesLogo}>
        <img src={LogoIcon} width="38" height="38" alt="Logo"/>
        <div className={styles.stylesTitle}>
          <h2>
            React Pizza
          </h2>
          <p>
            The most delicious pizza in the universe
          </p>
        </div>
      </div>
      <div className={styles.stylesBasket}>
        <p className={styles.stylesPrice}>
          { 520 + '$' }
        </p>
        <div className={styles.stylesCount}>
          <img src={BasketIcon} alt="Basket"/>
          <p>
            3
          </p>
        </div>
      </div>

    </div>
  )
}