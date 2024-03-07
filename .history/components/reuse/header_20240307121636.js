import React from 'react'
import Style from '@/components/reuse/styles/style.css'

const Header = () => {
  return (
    <>
        <nav>
            <h1>LOGO</h1>
            <h2>
                Next - Node Components
                <br />
                <span>using Next.js 14</span>
            </h2>
            <div>
              <button>Author</button>
              <button>Use CDN</button>
            </div>
        </nav>
    </>
  )
}

export default Header
