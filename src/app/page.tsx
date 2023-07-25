"use client"

import * as Icon from "@phosphor-icons/react"


import SwitchThemeButton from "@/components/SwitchThemeButton"


import "@/common/styles/_variables.scss"
import styles from "./page.module.scss"
import GalleryImage from "@/components/GalleryImage/GalleryImage"
import TabList from "@/components/TabList/TabList"

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <Icon.Image size={40} className={styles.iconColor} />

        <SwitchThemeButton />
        
        <TabList />
       
      </nav>
      <GalleryImage />
      
    </>
  )
}