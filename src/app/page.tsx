'use client' 

import * as Icon from "@phosphor-icons/react";

import SwitchThemeButton from "@/components/SwitchThemeButton"

import '@/styles/_variables.scss'
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <Icon.Image size={40} className={styles.iconColor} />

        <ul className={styles.navTabs}>
          <li>Landscape</li>
          <li>Dogs</li>
          <li>Cats</li>
          <li>Games</li>
        </ul>

        <SwitchThemeButton />
      </nav>
      <section>
      </section>
    </>
  )
}
