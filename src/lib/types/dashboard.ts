export interface Agent {
  id: string;
  name: string;
  status: 'available' | 'on-call' | 'break' | 'offline';
  currentCall?: {
    customerName: string;
    duration: string;
    phoneNumber: string;
  };
}

export interface DailyStats {
  totalCalls: number;
  answeredCalls: number;
  missedCalls: number;
  averageCallDuration: string;
  totalAgents: number;
  activeAgents: number;
} 