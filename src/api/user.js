const request = require('../utils/request')

module.exports = {
    verifyToken: function (token) {
        return request({
            url: '/user?access_token=' + token
        })
    },
    getInfo: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: '/users/' + githubUsername
        })
    },
    followers: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: `/users/${githubUsername}/followers`
        })
    },
    following: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: `/users/${githubUsername}/following`
        })
    },
    info:function (githubUsername) {
        return request({
            url: `/users/${githubUsername}`
        })
    },
}