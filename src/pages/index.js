// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import TopNavigationBar from '../components/top_navigation_bar'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <TopNavigationBar>
      <h1>欢迎来到我的Gatsby站点!</h1>
      <p>我正在通过gatsby的教程创建网页.</p>
      <Link to="/about">这里是关于页面</Link>
    </TopNavigationBar>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => {
  return (
    <>
      <title>主页</title>
      <meta name="描述" content="这是我自己写的网站" />
    </>
  )
}

// Step 3: Export your component
export default IndexPage