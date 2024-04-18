import Link from 'next/link'
import React from 'react'

const Comp15 = () => {
  return (
    <>
      <div className="comps comp15">
      <h3 className='comps-h'>Comp-15 <span>(Animation)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp15
