import React from 'react';
import AgentStatusCard from '../components/features/AgentStatusCard';
import { PhoneIcon, UserGroupIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Dummy data
const dummyAgents: Agent[] = [
  {
    id: '1',
    name: 'John Smith',
    status: 'on-call',
    currentCall: {
      customerName: 'Alice Johnson',
      duration: '5:23',
      phoneNumber: '(555) 123-4567'
    }
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    status: 'available',
  },
  {
    id: '3',
    name: 'Mike Brown',
    status: 'break',
  }
];

const dummyStats: DailyStats = {
  totalCalls: 45,
  answeredCalls: 38,
  missedCalls: 7,
  averageCallDuration: '4:30',
  totalAgents: 5,
  activeAgents: 3
};

const Dashboard: React.FC = () => {
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
  };

  return (
    <>
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

      {/* Employee Stats Section */}
      <div className="bg-white rounded-lg shadow">
        {/* Your existing employee stats table */}
        {/* ... */}
      </div>

      {/* Weekly Performance Trends */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        {/* Your existing trends section */}
        {/* ... */}
      </div>
    </>
  );
};

export default Dashboard; 