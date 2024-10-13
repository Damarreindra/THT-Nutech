import React from 'react'
import Layout from '../components/Layout'
import UserInfo from '../components/UserInfo'
import ServiceMenu from '../components/ServiceMenu'
import PromoBanner from '../components/PromoBanner'

function Home() {

  return (
    <>
    <Layout>
    <UserInfo/>
    <ServiceMenu/>
    <PromoBanner/>
    </Layout>
    </>
  )
}

export default Home