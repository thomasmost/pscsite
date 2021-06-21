/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ButtonPrimary from "../button-primary.js"
import ButtonSecondary from "../button-secondary"
import { SanityContent } from "gatsby-theme-catalyst-sanity"


// query MyQuery {
//   allSanityContactPage {
//     edges {
//       node {
//         id
//         featuredImage {
//           _key
//           _type
//           caption
//           alt
//           _rawAsset
//           _rawHotspot
//           _rawCrop
//         }
//         body {
//           _key
//           _type
//           style
//           list
//           _rawChildren
//         }
//         title
//       }
//     }
//   }
// }


const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          heroTitle
          _rawHeroText
          heroImage {
            asset
          }
        }
      }
    }
  `)
  const hero = data.allSanityPage.nodes[0]
  return (
    <section
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        mb: 6,
      }}
    >
      <div
        sx={{
          width: "100%",
        }}
      >
        <div
          sx={{
            width: "100%",
            height: ["auto", null, "auto", null, null],
            minHeight: ["initial", null, "500px", null, null],
            maxWidth: "800px",
            mx: "auto",
            my: 0,
          }}
        >
          <GatsbyImage
            sx={{
              width: "66%",
              margin: "auto",
              marginTop: "50px",
              maxWidth: "380px",
            }}
            fluid={hero.heroImage.asset}
            alt={hero.heroTitle}
          />
          <div
            sx={{
              margin: "auto",
              textAlign: "center",
              py: [5, null, 4, null, null],
              px: [3, null, 4, null, null],
              minWidth: ["100%", null, "50vw", null, null],
            }}
          >
            <div
              sx={{
                fontFamily: "heading",
                fontWeight: "heading",
                lineHeight: "heading",
                fontStyle: "italic",
              }}>
              "Who keeps us safe?"
            </div>
            <h1
              sx={{
                fontFamily: "heading",
                fontWeight: "heading",
                lineHeight: "heading",
                fontSize: 6,
                m: 0,
                py: 3,
                mt: 0,
                mb: 3,
              }}
            >
              {hero.heroTitle}
            </h1>
            <div
              sx={{
                margin: "auto",
                width: "280px",
                display: "grid",
                gridGap: [3, 3, null, null, null],
                gridTemplateColumns: [
                  "auto",
                  "auto auto",
                  null,
                  null,
                  null,
                ],
                justifyItems: ["stretch", "start", null, null, null],
              }}
            >
              <ButtonPrimary to="/work">Materials</ButtonPrimary>
              <ButtonSecondary to="/about">About Us</ButtonSecondary>
            </div>
            {Boolean(hero._rawHeroText) && <div sx={{ mt: 4, mb: 4 }}>
              <SanityContent data={hero._rawHeroText} />
            </div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero