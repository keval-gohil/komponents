import Link from 'next/link'
import React from 'react'

const Comp16 = () => {
  return (
    <>
      <div className="comps comp16">
      <h3 className='comps-h'>Comp-16 <span>(Screen)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp16
