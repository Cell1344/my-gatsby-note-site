import {
    container,
    link
} from '../css/top_navigation_bar.module.css'
import { Link } from 'gatsby'
import * as React from 'react'

const TopNavigationBar = ({children}) => {
    return (
        <main>
            <div className={container}>
                <Link to="/" className={link}>首页</Link>
                <Link to="/about" className={link}>关于我们</Link>
                <Link to="/404" className={link}>404页</Link>
            </div>
            {children}
        </main>
    )
}

export default TopNavigationBar
