'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin/sidebar'
import CompanyForm from '@/components/admin/company-form'

export default function CompanyPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check', { method: 'GET' })
        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          router.push('/admin')
        }
      } catch {
        router.push('/admin')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-light-grey">
      <AdminSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Company Information</h1>
          <p className="text-text-secondary mb-8">Manage your company profile and about page content</p>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CompanyForm />
          </div>
        </div>
      </main>
    </div>
  )
}
