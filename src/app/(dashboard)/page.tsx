import { PhoneIcon, UserGroupIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { StatsCard } from '@/components/features/stats-card'
import { CallVolumeChart } from '@/components/features/call-volume-chart'
import { EmployeePerformanceTable } from '@/components/features/employee-performance-table'

// Dummy data
const stats = {
  totalCalls: 45,
  answeredCalls: 38,
  missedCalls: 7,
  averageCallDuration: '4:30',
  totalAgents: 5,
  activeAgents: 3,
  callsPerHour: 12,
  customerSatisfaction: '95%'
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Summary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Today's Calls"
          mainStat={stats.totalCalls}
          subStat={stats.answeredCalls}
          mainStatLabel="Total Calls"
          subStatLabel="Answered"
          icon={<PhoneIcon className="w-6 h-6" />}
        />

        <StatsCard
          title="Agent Status"
          mainStat={`${stats.activeAgents}/${stats.totalAgents}`}
          mainStatLabel="Agents Active"
          icon={<UserGroupIcon className="w-6 h-6" />}
        />

        <StatsCard
          title="Average Call Time"
          mainStat={stats.averageCallDuration}
          mainStatLabel="Minutes"
          icon={<ClockIcon className="w-6 h-6" />}
        />

        <StatsCard
          title="Performance"
          mainStat={stats.callsPerHour}
          subStat={stats.customerSatisfaction}
          mainStatLabel="Calls per Hour"
          subStatLabel="Satisfaction Rate"
          icon={<CheckCircleIcon className="w-6 h-6" />}
        />
      </div>

      {/* Employee Stats Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Employee Performance</h2>
          <EmployeePerformanceTable />
        </div>
      </div>

      {/* Call Volume Chart */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Call Volume Today</h2>
        <div className="h-[300px]">
          <CallVolumeChart />
        </div>
      </div>
    </div>
  )
} 