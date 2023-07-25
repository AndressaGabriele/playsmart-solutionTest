import styles from './TabList.module.scss';

export default function TabList() {
    return(
        <ul className={styles.navTabs}>
          <li>
            <button>Landscape</button>
          </li>
          <li>
            <button>Dogs</button>
          </li>
          <li>
            <button>Cats</button>
          </li>
          <li>
            <button>Games</button>
          </li>
        </ul>
    )
}