import { Routes, Route } from "react-router-dom"

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/new' element={<New />} />
        </Routes>
    )
}