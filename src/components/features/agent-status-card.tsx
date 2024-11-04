'use client'

interface AgentStatus {
  id: string;
  name: string;
  status: 'available' | 'on-call' | 'break' | 'offline';
  currentCall?: {
    customerName: string;
    duration: string;
  };
}

interface AgentStatusCardProps {
  agent: AgentStatus;
}

export function AgentStatusCard({ agent }: AgentStatusCardProps) {
  const statusColors = {
    'available': 'bg-green-500',
    'on-call': 'bg-yellow-500',
    'break': 'bg-blue-500',
    'offline': 'bg-gray-500',
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center space-x-4">
        <div className={`w-3 h-3 rounded-full ${statusColors[agent.status]}`} />
        <div>
          <h3 className="font-medium text-gray-900">{agent.name}</h3>
          <p className="text-sm text-gray-500 capitalize">{agent.status}</p>
        </div>
      </div>
      {agent.currentCall && (
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-gray-600">
            On call with: {agent.currentCall.customerName}
          </p>
          <p className="text-sm text-gray-500">
            Duration: {agent.currentCall.duration}
          </p>
        </div>
      )}
    </div>
  )
} 