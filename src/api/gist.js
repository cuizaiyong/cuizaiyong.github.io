const request = require('../utils/request')

module.exports =  {
    list: function () {
        let githubUsername = 'cuizaiyong'
        return request({
            url: `/users/${githubUsername}/gists`
        })
    },
    single: function (id) {
        return request({
            url: '/gists/' + id
        })
    },
    create: function (form) {
        let files = {}
        files[form.title] = { content: form.content }
        return request({
            url: '/gists',
            method: 'post',
            data: {
                "description": form.description,
                "public": true,
                "files": files
            }
        })
    },
    edit: function (form) {
        let files = {}
        files[form.title] = { content: form.content }
        return request({
            url: '/gists/' + form.id,
            method: 'PATCH',
            data: {
                "description": form.description,
                "public": true,
                "files": files
            }
        })
    },
    delete: function (id) {
        return request({
            url: '/gists/' + id,
            method: 'DELETE',
        })
    },
}