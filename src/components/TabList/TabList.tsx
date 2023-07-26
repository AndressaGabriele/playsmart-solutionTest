import { useContext } from "react"

import TabItem from "../TabItem"

import { GlobalContext } from "@/context/store"
import { categories } from "@/common/utils/categories"

import styles from "./TabList.module.scss"

export default function TabList() {
  const { activeTab, setActiveTab } = useContext(GlobalContext)

  function handleClick(i: number) {
    setActiveTab(i)
  }

  return (
    <ul className={styles.navTabs}>
      {categories.map((tab, i) =>
        activeTab === i ? (
          <TabItem
            name={tab}
            status="on"
            key={`tab-${tab}`} // na documentacao do react nao se recomenda o uso do index como key.
            onClick={() => handleClick(i)}
          />
        ) : (
          <TabItem
            name={tab}
            status="off"
            key={`tab-${i}`}
            onClick={() => handleClick(i)}
          />
        )
      )}
    </ul>
  )
}
