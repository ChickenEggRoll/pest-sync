'use client'

interface EmployeeStats {
  id: number
  name: string
  avatar: string
  status: string
  todayStats: {
    calls: number
    answered: number
    missed: number
    avgCallTime: string
  }
}

const employeeStats: EmployeeStats[] = [
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
]

export function EmployeePerformanceTable() {
  return (
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
  )
} 