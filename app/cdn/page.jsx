import React from 'react'
import "../globals.css"
import '@/components/cdn-reuse/styles/cdn-style.css'
import '@/components/cdn-reuse/styles/cdn-responsive.css'
import CdnHeader from '@/components/cdn-reuse/cdnHeader'
import Background from '@/components/reuse/background'


const CdnPage = () => {
  return (
    <>
        <Background />
        <CdnHeader />
    </>
  )
}

export default CdnPage
