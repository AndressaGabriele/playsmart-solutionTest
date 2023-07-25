import * as Icon from "@phosphor-icons/react";

import styles from './SwitchThemeButton.module.scss'

export function SwitchThemeButton() {
    return (
        <button className={styles.button}>
            <Icon.MoonStars size={24} className={styles.iconColor} />
        </button>
    )
}