/** @jsx jsx */
import { jsx } from "theme-ui"
import useSiteLive from "../../use-site-live"

const SiteContainer = ({ children }) => {
  const {
    live,
  } = useSiteLive();
  return (
    <div
      sx={{
        background: "linear-gradient(to right, #92ff92, #e7fcbe)",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: "auto minmax(0, 1fr) auto",
        gridTemplateAreas: `
        "header" 
        "main"
        "footer"
        `,
        variant: "variants.siteContainer",
      }}
    >
      {live ? children : (<h1 style={{margin: 'auto', marginTop: '33vh'}}>Under Construction</h1>)}
    </div>
  )
}

export default SiteContainer