import Link from 'next/link'
import React from 'react'

const Comp10 = () => {
  return (
    <>
      <div className="comps comp10">
      <h3 className='comps-h'>Comp-10 <span>(Slider/Carousel)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp10
