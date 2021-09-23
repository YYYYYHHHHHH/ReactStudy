import React from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default function Search() {
    const updateName = (e) => {
        const name = e.target.value
        if(e.charCode !== 13 || name === '') return
        axios.get('https://api.github.com/users', {params: {q: name}, headers: {Authorization: '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'}})
        .then((res) => {
            console.log('请求成功：', res)
            PubSub.publish('userList', res.data)
        }).catch((err) => {
            console.log('请求失败：', err)
        })
    }

    return (
        <div>
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input onKeyPress={updateName} type="text" placeholder="enter the name you search" />&nbsp;<button>Search</button>
                </div>
            </section>
        </div>
    )
}
