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
            <span>
              <button>Author</button>
              <button>Use CDN</button>
            </span>
        </nav>
    </>
  )
}

export default Header
