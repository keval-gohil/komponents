import React from 'react'
import '@/components/reuse/styles/style.css'
import '@/components/reuse/styles/responsive.css'
import Background from '@/components/reuse/background'
import Header from '@/components/reuse/header'
import MainSection from '@/components/reuse/mainSection'
import Footer from '@/components/reuse/footer'

const page = () => {
  return (
    <>
      <Background />
      <Header />
      <MainSection />
      <Footer />
    </>
  )
}

export default page
