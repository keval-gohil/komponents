import Link from 'next/link'
import React from 'react'

const Comp9 = () => {
  return (
    <>
      <div className="comps comp9 Accordion">
      <h3 className='comps-h'>Comp-9 <span>(Accordion)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp9
