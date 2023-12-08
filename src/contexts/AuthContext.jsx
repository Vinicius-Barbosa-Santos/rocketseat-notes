import { createContext, useContext, useEffect, useState } from 'react'

// import API
import { api } from '../services/api'

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {

    const [data, setData] = useState({})

    // eslint-disable-next-line no-unused-vars
    const signIn = async ({ email, password }) => {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            localStorage.setItem('@user', JSON.stringify(user))
            localStorage.setItem('@token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível logar o usuário!')
            }
        }
    }

    const signOut = () => {
        localStorage.removeItem('@user')
        localStorage.removeItem('@token')

        setData({})
    }

    const updateProfile = async ({ user, avatarFile }) => {
        try {

            if (avatarFile) {
                const filePath = new FormData()
                filePath.append('avatar', avatarFile)

                const response = await api.patch('/users/avatar', filePath)
                user.avatar = response.data.avatar
            }

            await api.put('/users', user)

            localStorage.setItem('@user', JSON.stringify(user))

            setData({
                user,
                token : data.token
            })

            alert('Perfil Atualizado!')

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível atualizar o usuário!')
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@user')
        const token = localStorage.getItem('@token')

        if (user && token) {

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
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