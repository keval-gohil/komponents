import Link from 'next/link'
import React from 'react'

const Comp3 = () => {
  return (
    <>
      <div className="comps comp3 Nav-v2">
      <h3 className='comps-h'>Comp-3 <span>(Navigation v2)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp3
