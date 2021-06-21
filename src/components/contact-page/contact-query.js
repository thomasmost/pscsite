import React from "react"
import { graphql } from "gatsby"
import ContactPage from "./contact-page"

export default ({ data }) => {
  return <ContactPage data={{ ...data }} />
}

export const query = graphql`
  query SanityContactPageQuery {
    allSanityContactPage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
      edges {
        node {
          id
          title
          featuredImage {
            alt
          }
        }
      }
    }
  }
`