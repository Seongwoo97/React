import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'

createRoot(document.getElementById('root')).render(

  <div>
    <Home></Home>

    {/* 위에서 import Home 을 하면 Home 에 적용된 css 도 같이 따라서 적용됨 */}
    {/* 실제 웹으로 배포될 때는 모든 .jsx파일들이 하나의 .js로 만들어져 보여짐. 그래서 css도 모두 병합됨. */}
    <h2>여긴 main.jsx의 j2</h2>
    <p className='aa'>이건 main.js 의 p</p>
    <p className='bb'>이건 main.js의 p</p>

  </div>
)
