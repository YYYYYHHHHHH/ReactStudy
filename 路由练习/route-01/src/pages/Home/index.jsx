import React, { useState, useEffect } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Message from './Message'
import News from './News'

export default function index() {
    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <Link to="/home/message">Message</Link>
                    </li>
                    <li>
                        <Link to="/home/news">News</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/home/message" component={Message}></Route>
                    <Route path="/home/news" component={News}></Route>
                    <Redirect to="/home/message"></Redirect>
                </Switch>
            </div>
        </div>
    )
}
