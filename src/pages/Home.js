import React from 'react'

import NavbarFixed from '../components/NavbarFixed'
import ContentPage from '../components/ContentPage'
import LoginForm from '../components/LoginForm'

const Home = () => {
  return (
    <div id={"pageHome"}>
      <NavbarFixed />
      <ContentPage>

        {/* Login Form */}
        <LoginForm />
      </ContentPage>
    </div>
  )
}

export default Home
