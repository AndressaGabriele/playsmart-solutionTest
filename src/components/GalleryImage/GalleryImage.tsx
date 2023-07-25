import Image from "next/image"
import { collections } from "@/common/utils/db"

import styles from '../../components/GalleryImage/GalleryImage.module.scss'

export default function GalleryImage() {
    return (
    <section className={styles.content}>
        <h2>Landscape - Gallery</h2>

        <div className={styles.gallery}>
          {collections.map(({ img, alt }, i) => (
            <Image
              width={200}
              height={150}
              src={img}
              key={`img-${i}`}
              alt={alt}
              priority
            />
          ))}
        </div>
      </section>
    )
}