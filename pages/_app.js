import GeralStyle from "../Styles/Styles"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GeralStyle />
    </>
    )
}

export default MyApp
