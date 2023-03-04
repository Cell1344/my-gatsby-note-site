// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import TopNavigationBar from '../components/top_navigation_bar'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <TopNavigationBar>
        <h1>关于我们</h1>
        <p>这是跟着教程所创建的新页面，这个网站本身是我自己的笔记网站.</p>
        <Link to="/">这里是主页</Link>
        <p>下面是一段markdown</p>
      </TopNavigationBar>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>关于我们</title>

// Step 3: Export your component
export default AboutPage