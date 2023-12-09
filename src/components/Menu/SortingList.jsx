import styles from './Menu.module.scss'

export default function SortingList({sortList, setSelectedSort, setSortOpen}){

  const toggleSort = (index) => {
    setSelectedSort(index);
    setSortOpen(false)
  }

  return(
    <ul className={styles.stylesSortMenu}>
      {sortList.map((sort, index) => (
       <li
         key={index}
         className={styles.stylesSortMenuItem}
         onClick={() => toggleSort(index)}
       >
         {sort}
       </li>
      ))}
    </ul>
  )
}