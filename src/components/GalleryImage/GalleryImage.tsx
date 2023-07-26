import { useContext, useEffect, useState } from "react"
import Image from "next/image"

import { GlobalContext } from "@/context/store"
import { categories } from "@/common/utils/categories"

import styles from "../../components/GalleryImage/GalleryImage.module.scss"

interface ImageProps {
  img: string
  alt: string
}

export default function GalleryImage() {
  const { activeTab } = useContext(GlobalContext)
  const [collection, setCollection] = useState<ImageProps[]>([])

  useEffect(() => {
    async function fetchUnsplashPictures(term: string) {
      if (typeof term !== "string") {
        return
      }

      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&query={${term}}`
      )
      const data = await response.json()

      if (!data) {
        return <>Loading...</>
      }
      const unsplashPictures = []

      for (let i = 0; i < data?.results?.length; i++) {
        if (i === 9) {
          break
        }

        const item = data.results[i]

        unsplashPictures.push({
          img: item.urls.regular,
          alt: item.alt_description,
        })
      }

      setCollection(unsplashPictures)
    }

    fetchUnsplashPictures(categories[activeTab])
  }, [activeTab])

  return (
    <section className={styles.content}>
      <h2>{categories[activeTab]} - Gallery</h2>

      <div className={styles.gallery}>
        {collection.map(({ img, alt }, i) => (
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
