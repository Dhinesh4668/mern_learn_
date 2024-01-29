import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HomeScreen, EditProfile, ProfileScreen, AuthProfile} from './Screens'
import RegersterScreen from './Screens/AuthScreen/RegersterScreen'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profile/:id' element={<HomeScreen />} />
        <Route path='/edit/:id' element={<EditProfile />} />
        <Route path='/' element={<ProfileScreen />} />
        <Route path='/login' element={<AuthProfile />} />
        <Route path='/regester' element={<RegersterScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App