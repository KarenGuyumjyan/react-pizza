import {useEffect, useRef, useState} from 'react';
import TriangleIcon from '../../assets/icons/triangle.svg';
import styles from './Menu.module.scss';
import SortingList from './SortingList';

const sortList = ["Popularity", "Price", "Alphabetically"];

export default function Sorting() {
  const sortRef = useRef();
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const selection = sortList[selectedSort];

  useEffect(() => {
    let handler = (e) => {
      if(!sortRef.current.contains(e.target)){
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handler)
  });


  return (
    <div className={styles.stylesSort} ref={sortRef}>
      <img
        className={sortOpen ? styles.stylesOpenSort : styles.stylesCloseSort}
        src={TriangleIcon}
        alt="<"
        width="32px"
        height="32px"
      />
      <div className={styles.stylesSortText}>
        <p className={styles.stylesSortTitle}>
          Sort by:
        </p>
        <p
          className={styles.stylesSortSelection}
          onClick={() => setSortOpen(!sortOpen)}
        >
          {selection}
        </p>
      </div>
      {
        sortOpen &&
        <SortingList
          sortList={sortList}
          setSelectedSort={setSelectedSort}
          setSortOpen={setSortOpen}
        />
      }
    </div>
  )
}