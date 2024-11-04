import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HomeIcon, PhoneIcon, UserGroupIcon, DocumentTextIcon, ClockIcon, CheckCircleIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import LiveConnect from './pages/LiveConnect';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Add this dummy data at the top of your file
const employeeStats = [
  {
    id: 1,
    name: "John Smith",
    avatar: "JS",
    status: "Available",
    todayStats: {
      calls: 15,
      answered: 13,
      missed: 2,
      avgCallTime: "3:45"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "SJ",
    status: "On Call",
    todayStats: {
      calls: 12,
      answered: 11,
      missed: 1,
      avgCallTime: "4:20"
    }
  },
  {
    id: 3,
    name: "Mike Wilson",
    avatar: "MW",
    status: "Break",
    todayStats: {
      calls: 8,
      answered: 7,
      missed: 1,
      avgCallTime: "5:10"
    }
  },
  {
    id: 4,
    name: "Lisa Anderson",
    avatar: "LA",
    status: "DND",
    todayStats: {
      calls: 10,
      answered: 9,
      missed: 1,
      avgCallTime: "4:15"
    }
  }
];

// Add this after your employeeStats data
const hourlyCallData = {
  labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
  datasets: [
    {
      label: 'Calls Received',
      data: [4, 7, 12, 8, 5, 9, 11, 6, 3],
      backgroundColor: 'rgba(34, 197, 94, 0.5)', // green-500 with opacity
      borderColor: 'rgb(34, 197, 94)', // green-500
      borderWidth: 1,
    },
    {
      label: 'Calls Missed',
      data: [1, 2, 3, 1, 0, 2, 1, 0, 1],
      backgroundColor: 'rgba(239, 68, 68, 0.5)', // red-500 with opacity
      borderColor: 'rgb(239, 68, 68)', // red-500
      borderWidth: 1,
    }
  ],
};

function App() {
  const navigation = [
    { label: 'Dashboard', icon: <HomeIcon className="w-6 h-6" />, to: '/' },
    { label: 'Live Connect', icon: <PhoneIcon className="w-6 h-6" />, to: '/live-connect' },
    { label: 'Customers', icon: <UserGroupIcon className="w-6 h-6" />, to: '/customers' },
    { label: 'Scripts', icon: <DocumentTextIcon className="w-6 h-6" />, to: '/scripts' },
  ];

  return (
    <Router>
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
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 ${
                  isActive ? 'bg-green-50 text-green-600' : ''
                }`}
              >
                {item.icon}
                <span className="ml-3 font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Main Content + Footer Container */}
        <div className="ml-64 flex flex-col min-h-screen">
          <header className="h-16 bg-white shadow-sm">
            <div className="flex h-full items-center px-6">
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>
          </header>

          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={
                <div className="space-y-6">
                  {/* Summary Stats Cards - Updated to 3 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Total Calls Today */}
                    <div className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-100">
                          <PhoneIcon className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Total Calls Today</p>
                          <p className="text-2xl font-semibold text-gray-900">45</p>
                          <p className="text-sm text-gray-600">40 answered, 5 missed</p>
                        </div>
                      </div>
                    </div>

                    {/* Average Wait Time */}
                    <div className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100">
                          <ClockIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Avg Wait Time</p>
                          <p className="text-2xl font-semibold text-gray-900">1:30</p>
                          <p className="text-sm text-gray-600">-15s from yesterday</p>
                        </div>
                      </div>
                    </div>

                    {/* Active Agents */}
                    <div className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-full bg-yellow-100">
                          <UserGroupIcon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Active Agents</p>
                          <p className="text-2xl font-semibold text-gray-900">3/4</p>
                          <p className="text-sm text-gray-600">1 on break</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Existing Employee Stats Table */}
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                      <h2 className="text-lg font-medium text-gray-900">Employee Performance</h2>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Employee
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Today's Calls
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Avg Call Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {employeeStats.map((employee) => (
                            <tr key={employee.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                      <span className="text-green-800 font-medium">{employee.avatar}</span>
                                    </div>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                  ${employee.status === 'Available' ? 'bg-green-100 text-green-800' : 
                                    employee.status === 'On Call' ? 'bg-yellow-100 text-yellow-800' : 
                                    employee.status === 'DND' ? 'bg-red-100 text-red-800' :
                                    'bg-gray-100 text-gray-800'}`}>
                                  {employee.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{employee.todayStats.calls} calls</div>
                                <div className="text-xs text-gray-500">
                                  {employee.todayStats.answered} answered, {employee.todayStats.missed} missed
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{employee.todayStats.avgCallTime}</div>
                                <div className="text-xs text-gray-500">minutes</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Call Volume Today */}
                  <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Call Volume Today</h2>
                    <div className="h-[300px]">
                      <Bar
                        data={hourlyCallData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'top' as const,
                            },
                            title: {
                              display: false,
                            },
                          },
                          scales: {
                            y: {
                              beginAtZero: true,
                              ticks: {
                                stepSize: 1,
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              } />
              <Route path="/live-connect" element={<LiveConnect />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                    PestSync
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Empowering pest control companies with modern call center solutions.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                    Quick Links
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="https://pestsync.com" className="text-sm text-gray-500 hover:text-gray-900">
                        Visit Website
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@pestsync.com" className="text-sm text-gray-500 hover:text-gray-900">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                    Contact
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li className="text-sm text-gray-500">
                      <a href="tel:1-800-PESTSYNC" className="hover:text-gray-900">
                        1-800-PESTSYNC
                      </a>
                    </li>
                    <li className="text-sm text-gray-500">
                      support@pestsync.com
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-400 text-center">
                  © {new Date().getFullYear()} PestSync. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App; 