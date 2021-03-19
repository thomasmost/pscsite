import { graphql, useStaticQuery } from 'gatsby'

export interface SiteLive{
  live: Boolean;
}

function useSiteLive(): SiteLive {
  const data = useStaticQuery(graphql`
    allSanitySiteSettings {
      edges {
        node {
          live
        }
      }
    }
  `)

  // Return directly wanted data
  return data.allSanitySiteSettings.edges.node
}

export default useSiteLive