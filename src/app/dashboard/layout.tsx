import { HomeIcon, PhoneIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { label: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { label: 'Live Connect', icon: PhoneIcon, href: '/dashboard/live-connect' },
  { label: 'Customers', icon: UserGroupIcon, href: '/dashboard/customers' },
  { label: 'Scripts', icon: DocumentTextIcon, href: '/dashboard/scripts' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex h-16 items-center px-6 border-b">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
            PestSync
          </h1>
        </div>
        <nav className="mt-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600"
            >
              <item.icon className="w-6 h-6" />
              <span className="ml-3 font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex flex-col min-h-screen">
        <header className="h-16 bg-white shadow-sm">
          <div className="flex h-full items-center px-6">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 