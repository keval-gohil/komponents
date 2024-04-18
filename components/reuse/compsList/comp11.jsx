import Link from 'next/link'
import React from 'react'

const Comp11 = () => {
  return (
    <>
      <div className="comps comp11">
      <h3 className='comps-h'>Comp-11 <span>(Popup)</span></h3>
        <ul>
          <li><Link href="/comps">header1</Link></li>
          <li><Link href="/comps">header2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Comp11
