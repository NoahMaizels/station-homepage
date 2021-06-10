const GhostContentAPI = require("@tryghost/content-api")

require("dotenv").config()
// Create API instance with site credentials
const api = new GhostContentAPI({
    url: "https://fomocraft-cms.herokuapp.com",
    key: "3937009b4d7a95f4dd42a3a747",
    version: "v3"
})


// const api = new GhostContentAPI({
//     url: process.env.GHOST_URL,
//     key: process.env.CONTENT_KEY,
//     version: "v3"
// })


const getPosts = async () => {
    let results = await api.posts
        .browse({
            limit: "all",
            include: 'tags,authors'
        })
        .catch(err => {
            console.error(err)
        })
        // console.log(results)
        return results
}

const getSinglePost =  async (postSlug) => {
    return await api.posts
        .read({
            slug: postSlug
        },
            { include: 'tags,authors' })
        .catch(err => {
            console.error(err);
        });
}

getPosts()

module.exports = {
    getPosts,
    getSinglePost
}