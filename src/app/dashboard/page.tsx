import Dashboard from '@/components/dashboard/Dashboard'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
    <Dashboard/>
    </Suspense>
  )
}

export default page
