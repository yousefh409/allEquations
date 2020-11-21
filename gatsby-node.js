const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/equations/)) {
      createPage({
        path: "/equations",
        matchPath: "/equations/:category/:subcategory/:id",
        component: path.resolve("src/pages/equations.jsx")
     })

    }
  }