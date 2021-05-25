// Create Contact Page
async function createSanityContactPage(actions, reporter) {
  const { createPage } = actions

  reporter.info(`Creating contact page`)

  createPage({
    path: "/contact/",
    component: require.resolve("./src/components/contact-page/contact-query"),
    context: {},
  })
}

// Create all the pages
exports.createPages = async ({ actions, reporter }) => {
  await createSanityContactPage(actions, reporter)
}