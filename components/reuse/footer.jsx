import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-row">
                <a href="/"><img src="./kImg/k-logo.png" alt="Komponents" /></a>
                <div className="social-btn">
                    <a href="/"><i className='mingcute--linkedin-line'></i></a>
                    <a href="/"><i className='ri--instagram-line'></i></a>
                </div>
            </div>
            <span className='rights'>© 2024 Komponents. All rights reserved.</span>
            <div className="footer-links">
                <a href="https://kval.vercel.app/" target='_blank'>Author</a>
                <a href="#"></a>
                <a href="https://github.com/keval-gohil" target='_blank'>GitHub</a>
            </div>
        </div>
    </>
  )
}

export default Footer
