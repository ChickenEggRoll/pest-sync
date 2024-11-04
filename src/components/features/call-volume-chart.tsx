'use client'

import { ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { defaultBarChartOptions } from '@/lib/config/chart'

const hourlyCallData: ChartData<'bar'> = {
  labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
  datasets: [
    {
      label: 'Calls Received',
      data: [4, 7, 12, 8, 5, 9, 11, 6, 3],
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
      borderColor: 'rgb(34, 197, 94)',
      borderWidth: 1,
    },
    {
      label: 'Calls Missed',
      data: [1, 2, 3, 1, 0, 2, 1, 0, 1],
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
      borderColor: 'rgb(239, 68, 68)',
      borderWidth: 1,
    }
  ],
}

export function CallVolumeChart() {
  return (
    <Bar
      data={hourlyCallData}
      options={defaultBarChartOptions}
    />
  )
} 