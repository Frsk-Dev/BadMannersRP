import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AuthCallback() {
  const { login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      login(token)
      navigate('/')
    } else {
      navigate('/?auth=failed')
    }
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#fff', fontFamily: 'Lato, sans-serif', letterSpacing: '0.2em', fontSize: 13 }}>
      Authenticating...
    </div>
  )
}
