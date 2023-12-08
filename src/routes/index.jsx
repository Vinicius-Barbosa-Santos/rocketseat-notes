import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from '../routes/appRoutes'
import { AuthRoutes } from '../routes/authRoutes'

import { useAuth } from "../contexts/AuthContext";

export const Routes = () => {

    const { user } = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}