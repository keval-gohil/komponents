import Link from 'next/link'
import React from 'react'

const Comp2 = () => {
  return (
    <>
      <div className="comps comp2 Nav-v1">
      <h3 className='comps-h'>Comp-2 <span>(Navigation v1)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp2
