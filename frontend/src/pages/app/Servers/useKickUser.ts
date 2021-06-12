import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useKickUser = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(!token) navigate('/auth')
  }, [pathname, navigate])
}