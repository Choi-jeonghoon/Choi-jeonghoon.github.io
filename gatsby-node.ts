const path = require('path')

exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions

  // Fetch Contentful data
  const result = await graphql(`
    query FetchContentfulPosts {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    throw new Error('Error fetching Contentful posts')
  }

  // Create a page for each Contentful post
  result.data.allContentfulPost.nodes.forEach((node: { slug: any }) => {
    createPage({
      path: `/${node.slug}`, // Ensure the path is unique
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: node.slug,
      },
    })
  })
}
