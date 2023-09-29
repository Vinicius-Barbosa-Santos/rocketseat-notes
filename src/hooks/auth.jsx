import { createContext } from "react";

// import React
import { useContext, useState } from 'react'

// import API
import { api } from '../services/api'

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [data, setData] = useState({})

    // eslint-disable-next-line no-unused-vars
    const signIn = async ({ email, password }) => {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível entrar.')
            }
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, user : data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}