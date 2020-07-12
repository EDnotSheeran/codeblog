const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/junior/Desktop/codeblog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/junior/Desktop/codeblog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/junior/Desktop/codeblog/src/pages/index.js"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/home/junior/Desktop/codeblog/src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/home/junior/Desktop/codeblog/src/templates/tag.jsx")))
}

