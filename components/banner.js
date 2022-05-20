import styled from "styled-components"
// import '../styles/globals.css'
import styles from './banner.module.css'

const Banner = (props) => {
   return (
      // <BannerStyles>
      <div className={styles.container}>
         <h1 className={styles.title}><span className={styles.title1}>Coffee</span> <span className={styles.title2}>connoisseur</span> </h1>
         <p className={styles.subtitle}>Discover your local coffee shop</p>
         <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={props.handleOnclick}>{props.buttonText}</button>
         </div>
      </div>
      // </BannerStyles>
   )
}
export default Banner

// const BannerStyles = styled.div`
// :root{
//   --text-purple: rgba(67, 56, 202,1)
//   --text-purple-dark: rgba(79, 70, 229,1)
//   --text-black: rgba(17, 24, 39,1)
//   --text-white-100: rgba(229, 231, 235,1)
// }

// margin-bottom: 1em;
// .title{
//    color: #373b64;
//    letter-spacing: -0.025em;
//    font-weight: 800;
//    color: var(--text-black);
//    .title1{
// font-size: 72px;
// color: var(--text-white);
//    }
//    .title2{
//       font-size: 48px;
// color: var(--text-purple);

//    }
// }
// .subtitle{

// }
// .button{
// background-color: var(--text-purple);
// color:var(--text-white);
// }
// `