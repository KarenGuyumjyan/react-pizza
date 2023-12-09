import { useState } from 'react';
import styles from './Menu.module.scss';

const CategoriesList = ["All", "Meat", "Grill", "Vegetarian", "Spice", "Closed"];

export default function Categories() {
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <ul className={styles.stylesCategoryList}>
      {
        CategoriesList.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedItem(index)}
            className={`
              ${styles.stylesItems}
              ${index === selectedItem && styles.stylesItems_Active}
            `}
          >
            {item}
          </li>
        ))
      }
    </ul>
  )
}