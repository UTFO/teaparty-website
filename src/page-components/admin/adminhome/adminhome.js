import React from 'react'
import "./adminhome.css"

import AdminNavbar from '../components/navbar/nav'
import Container from '../components/container/container'
import SmallContainer from '../components/smallContainer/smallContainer'

import { ScrollContainer } from '../components/scrollContainer.js/scrollContainer'

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar/>

      <Container text="Modify Home">
        
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', paddingBottom: 80}}>
          <SmallContainer title="Manage Event Highlights" subtitle="Click on the pencil icon to edit, plus icon to add, and trash icon to delete" width={50}>
            <ScrollContainer>
              <div style={{width: 50, backgroundColor: 'black', height: 50}}/>
            </ScrollContainer>
          </SmallContainer>

          <SmallContainer title="Edit Links" subtitle="Change the sign-up link and instagram or email!" width={35}>
          </SmallContainer>
        </div>
      </Container>
    </div>
  )
}

export default AdminHome