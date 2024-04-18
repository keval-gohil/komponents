import Link from 'next/link'
import React from 'react'

const Comp8 = () => {
  return (
    <>
      <div className="comps comp8">
      <h3 className='comps-h'>Comp-8 <span>(Dropdown)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp8
