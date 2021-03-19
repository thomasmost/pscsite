import { graphql, useStaticQuery } from 'gatsby'

export interface SiteLive{
  live: Boolean;
}

function useSiteLive(): SiteLive {
  const data = useStaticQuery(graphql`
    query {
      allSanitySiteSettings(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          live
        }
      }
    }
  `)

  // Return directly wanted data
  return data.allSanitySiteSettings.nodes
  // return { live: true }
}

export default useSiteLive