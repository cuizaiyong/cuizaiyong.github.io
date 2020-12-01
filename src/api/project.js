const request = require('../utils/request')

module.exports =  {
    getBlogReadme: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/README.md'
        })
    },
    getBlogConfigure: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/static/configuration.json'
        })
    },
    editBlogConfigure: function (configure, sha) {
        let content = JSON.stringify(configure)
        let githubUsername = 'cuizaiyong'
        return request({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/static/configuration.json',
            method: 'PUT',
            data: {
                "message": "a",
                "content": require('js-base64').Base64.encode(content),

                "sha": sha
            }
        })
    },
    list: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: `/users/${githubUsername}/repos`

        })
    },
    single: function (name) {
        let githubUsername = 'cuizaiyong'
        return new Promise((resolve, reject) => {
            request({
                url: '/repos/' + githubUsername + '/' + name
            }).then((response) => {
                request({
                    url: '/repos/' + githubUsername + '/' + name + '/contents/README.md'
                }).then((sr) => {
                    response.data['readme_content'] = sr.data['content']
                    resolve(response)
                }).catch(() => {
                    response.data['readme_content'] = ""
                    resolve(response)
                })
            })

        })
    },

}