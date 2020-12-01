// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const gist = require('./src/api/gist');
const project = require('./src/api/project');
const user = require('./src/api/user');
module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const gs= addCollection('Gist');
    const item = addCollection('Project');
    const followers = addCollection('Followers');
    const following = addCollection('Following');
    const [
      { data: followersData },
      { data: followingData },
      { data: gistData },
      { data: projectData }
    ] = await Promise.all([user.followers(), user.following(), gist.list(), project.list()]);
    followersData.forEach(followers.addNode);
    followingData.forEach(following.addNode);
    gistData.forEach(gs.addNode);
    projectData.forEach(item.addNode);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
