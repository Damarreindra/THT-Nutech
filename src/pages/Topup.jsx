import React from 'react'
import Layout from '../components/Layout'
import TopupForm from '../components/TopupForm'
import UserInfo from '../components/UserInfo'

function Topup() {
  return (
    <Layout>
                <UserInfo/>

        <TopupForm/>
    </Layout>
  )
}

export default Topup