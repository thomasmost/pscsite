export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'e382d589-9a7c-4bdd-8908-22cda7b432b7',
            buildHookId: 'https://api.netlify.com/build_hooks/60528f7785a111183dd985f2',
            name: 'pscsanity',
          },
          {
            title: 'Website',
            apiId: 'bebb71dc-26c4-44e8-9ab6-4077955d99c3',
            buildHookId: 'https://api.netlify.com/build_hooks/60528f5b63ca2c165d5fc800',
            name: 'peopleschool'
          }
        ]
      }
    }
  ]
}