import React from 'react'
import "./admindashboard.css"

import AdminNavbar from '../components/navbar/nav'
import Container from '../components/container/container'
import SmallContainer from '../components/smallContainer/smallContainer'

const AdminDashboard = () => {
  return (
    <div>
        <AdminNavbar/>

        <Container text="Dashboard">

          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 80}}>

            <SmallContainer title="Manage Pages" subtitle="Click on an icon to edit the respective page contents!" width={100}>
              Page Content
            </SmallContainer>

          </div>
            
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', paddingBottom: 80}}>
            <SmallContainer title="Read Documentation" subtitle="Learn the website structure and how to manage it!" width={40}>
              Page Content
            </SmallContainer>
            <SmallContainer title="Change Admin Account" subtitle="Edit admin accounts that accesses this dashboard!" width={40}>
              Page Content
            </SmallContainer>
          </div>
        </Container>

    </div>
  )
}

export default AdminDashboard