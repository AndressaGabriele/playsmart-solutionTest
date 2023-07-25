"use client"

import * as Icon from "@phosphor-icons/react"

import SwitchThemeButton from "@/components/SwitchThemeButton"
import GalleryImage from "@/components/GalleryImage/GalleryImage"
import TabList from "@/components/TabList/TabList"

import styles from "./page.module.scss"
import { GlobalContextProvider } from "@/context/store"

export default function Home() {
  return (
    <>
      <GlobalContextProvider>
        <nav className={styles.navbar}>
          <Icon.Image size={40} className={styles.iconColor} />

          <SwitchThemeButton />

          <TabList />
        </nav>
        <GalleryImage />
      </GlobalContextProvider>
    </>
  )
}
