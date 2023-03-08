// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const IndexPage = () => {
    return (
        <main>
            <h1>欢迎来到我的Gatsby站点!</h1>
            <p>我正在通过gatsby的教程创建网页.</p>
        </main>
    )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => {
    return <title>Cell的个人网站</title>
}

// Step 3: Export your component
export default IndexPage