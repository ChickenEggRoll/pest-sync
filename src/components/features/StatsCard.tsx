import React from 'react';

interface StatsCardProps {
  title: string;
  mainStat: string | number;
  subStat?: string | number;
  subStatLabel?: string;
  mainStatLabel: string;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  mainStat,
  subStat,
  subStatLabel,
  mainStatLabel,
  icon
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {icon && <div className="text-green-600">{icon}</div>}
      </div>
      <div className="mt-2 grid gap-4">
        <div>
          <p className="text-2xl font-semibold text-green-600">
            {mainStat}
          </p>
          <p className="text-sm text-gray-500">{mainStatLabel}</p>
        </div>
        {subStat && (
          <div>
            <p className="text-xl font-semibold text-gray-700">
              {subStat}
            </p>
            <p className="text-sm text-gray-500">{subStatLabel}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard; 