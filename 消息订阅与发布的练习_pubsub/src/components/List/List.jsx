import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
export default function List() {
    const [lists, setLists] = useState([{ avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', login: 'motojo', html_url: 'https://github.com/mojombo' }])

    useEffect(() => {
        const token = PubSub.subscribe('userList', (_, data) => {
            console.log('List：', data)
            setLists(data)
        })
        return () => {
            PubSub.unsubscribe(token)
        }
    })
    return (
        <div>
            <div className="row">
                {lists.map((list, index) => {
                    return (
                        <div key={index} className="card">
                            <a rel="noreferrer" href={list.html_url} target="_blank">
                                <img src={list.avatar_url} style={{ width: '100PX' }} />
                            </a>
                            <p className="card-text">{list.login}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
