import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// kullanıcı login olduktan sonra url'den checkout sayfasına gidemediği için user verisini useAuth0 kancasından alıyoruz ve App.js'i AuthWrapper ile sarıyoruz.
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0()
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to='/' />
      }}
    ></Route>
  )
}
export default PrivateRoute
