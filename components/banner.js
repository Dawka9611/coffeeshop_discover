import styled from "styled-components"
// import '../styles/globals.css'

const Banner = (props) => {
   return (
      <BannerStyles>
         <div>
            <h1 className="title"><span className="title1">Coffee</span> <span className="title2">connoisseur</span> </h1>
            <p className="subtitle">Discover your local coffee shop</p>
            <button className="button" onClick={props.handleOnclick}>{props.buttonText}</button>
         </div>
      </BannerStyles>
   )
}
export default Banner

const BannerStyles = styled.div`
:root{
  --text-purple: rgba(67, 56, 202,1)
  --text-purple-dark: rgba(79, 70, 229,1)
  --text-black: rgba(17, 24, 39,1)
  --text-white-100: rgba(229, 231, 235,1)
}

margin-bottom: 1em;
.title{
   color: #373b64;
   letter-spacing: -0.025em;
   font-weight: 800;
   color: var(--text-black);
   .title1{
font-size: 72px;
color: var(--text-white);
   }
   .title2{
      font-size: 48px;
color: var(--text-purple);

   }
}
.subtitle{

}
.button{
background-color: var(--text-purple);
color:var(--text-white);
}
`