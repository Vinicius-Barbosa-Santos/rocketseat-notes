import { createContext, useEffect } from "react";

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

            localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
            localStorage.setItem('@rocketnotes:token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível entrar.')
            }
        }
    }

    const signOut = () => {
        localStorage.removeItem('@rocketnotes:token')
        localStorage.removeItem('@rocketnotes:user')

        setData({})
    }

    const updateProfile = async ({ user, avatarFile }) => {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append('avatar', avatarFile)

                const response = await api.patch('/users/avatar', fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put('/users', user)
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user))

            setData({
                token : data.token,
                user
            })

            alert('Perfil atualizado!')

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível atualizar o perfil.')
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@rocketnotes:token')
        const user = localStorage.getItem('@rocketnotes:user')

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
            updateProfile
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}