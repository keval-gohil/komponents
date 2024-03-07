import React from 'react'
import Style from '@/components/reuse/styles/style.css'

const Header = () => {
  return (
    <>
        <nav>
            <img src="https://i.postimg.cc/8zLFMvXF/Picsart-24-03-07-15-11-56-660.png" alt="" />
            <h2>Next - Node Components<span>using Next.js 14</span></h2>
            <div>
              <button>Author <i className='mynaui--arrow-up-right'></i></button>
              <button>Use CDN&nbsp;<i className='ph--webhooks-logo'></i></button>
            </div>
        </nav>
    </>
  )
}

export default Header
