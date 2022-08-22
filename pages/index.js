import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import coffeeStores from '../data/coffee-stores.json'

export default function Home() {
  const HandleOnClick = () => {
    // console.log('hello :>> ');
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Coffee connoisseur</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Banner buttonText='View stores nearby' handleOnclick={HandleOnClick} />
          <div className={styles.heroImage}>
            <Image src="/static/hero-image.png" height={450} width={800} alt='' />
          </div>
          <div className={styles.cardLayout}>
            {
              coffeeStores.map(el => {
                // console.log('el :>> ', el);
                return <Card name={el.name} imgUrl={el.imgUrl} href={`/coffee-store/${el.id}`} className={styles.card} key={el.id} />
              })
            }
          </div>
        </main>
      </div>
    </>
  )
}
