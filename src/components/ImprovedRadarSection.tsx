import { motion } from 'motion/react';
import { MessageSquare, Activity, Brain, Zap } from 'lucide-react';
import phoneHandImage from '../assets/0c9240826e9ffe92694bc85bdf6aaad1bef4c960.png';

export function ImprovedRadarSection() {
  const categories = [
    { label: 'Communication', angle: 0, value: 75, previousValue: 60 },
    { label: 'Social', angle: 51.43, value: 65, previousValue: 50 },
    { label: 'Sensory', angle: 102.86, value: 80, previousValue: 70 },
    { label: 'Behavior', angle: 154.29, value: 70, previousValue: 55 },
    { label: 'Cognitive', angle: 205.71, value: 85, previousValue: 75 },
    { label: 'Motor', angle: 257.14, value: 90, previousValue: 85 },
    { label: 'Self-Care', angle: 308.57, value: 78, previousValue: 65 },
  ];

  const center = 150;
  const maxRadius = 110;
  const labelRadius = maxRadius + 15; // pull labels slightly in so they don't clip

  const polarToCartesian = (angle: number, radius: number) => {
    const angleInRadians = ((angle - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(angleInRadians),
      y: center + radius * Math.sin(angleInRadians),
    };
  };

  const createPath = (values: number[]) => {
    const points = categories.map((cat, i) => {
      const radius = (values[i] / 100) * maxRadius;
      return polarToCartesian(cat.angle, radius);
    });
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ') + ' Z';
  };

  const currentPath = createPath(categories.map(c => c.value));
  const previousPath = createPath(categories.map(c => c.previousValue));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Background Phone Image - Subtle */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <img src={phoneHandImage} alt="" className="h-full object-contain" />
      </div>

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6">
        {/* Radar Chart */}
        <svg viewBox="0 0 300 300" className="w-full h-auto mb-4">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map(percent => (
            <circle
              key={percent}
              cx={center}
              cy={center}
              r={(percent / 100) * maxRadius}
              fill="none"
              stroke="#F0D9C9"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {categories.map(cat => {
            const point = polarToCartesian(cat.angle, maxRadius);
            return (
              <line
                key={cat.label}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                stroke="#F0D9C9"
                strokeWidth="1"
              />
            );
          })}

          {/* Previous period (teal) */}
          <motion.path
            d={previousPath}
            fill="#14B8A6"
            fillOpacity="0.15"
            stroke="#14B8A6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Current period (amber) */}
          <motion.path
            d={currentPath}
            fill="#F57D48"
            fillOpacity="0.25"
            stroke="#F57D48"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Data points */}
          {categories.map((cat, i) => {
            const radius = (cat.value / 100) * maxRadius;
            const point = polarToCartesian(cat.angle, radius);
            return (
              <motion.circle
                key={cat.label}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#F57D48"
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              />
            );
          })}

          {/* Labels */}
          {categories.map(cat => {
            const labelPoint = polarToCartesian(cat.angle, labelRadius);
            return (
              <text
                key={cat.label}
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                className="text-xs fill-gray-700"
              >
                {cat.label}
              </text>
            );
          })}
        </svg>

        {/* Insight Cards */}
        <div className="space-y-3">
          {/* Journal Entry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="bg-[#FFF8F0] rounded-lg p-3 border-l-4 border-[#F57D48]"
          >
            <div className="flex items-start gap-2">
              <MessageSquare className="w-4 h-4 text-[#F57D48] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 mb-1">Journal Entry</p>
                <p className="text-sm text-gray-700">
                  Many challenges with transitions today but hyperactivity reduced.
                </p>
              </div>
            </div>
          </motion.div>

          {/* OT Insight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-[#E6F7F5] rounded-lg p-3 border-l-4 border-[#14B8A6]"
          >
            <div className="flex items-start gap-2">
              <Activity className="w-4 h-4 text-[#14B8A6] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 mb-1">OT Insight</p>
                <p className="text-sm text-gray-700">
                  Based on Emma&apos;s sensory profile, try a visual transition timer with 5-minute
                  warnings
                </p>
              </div>
            </div>
          </motion.div>

          {/* PT Insight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-[#FFF8F0] rounded-lg p-3 border-l-4 border-[#F57D48]"
          >
            <div className="flex items-start gap-2">
              <Zap className="w-4 h-4 text-[#F57D48] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 mb-1">PT Insight</p>
                <p className="text-sm text-gray-700">
                  Your logs show hyperactivity peaks before transitions—add 2 minutes of wall pushes
                  beforehand.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ABA Insight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="bg-[#E6F7F5] rounded-lg p-3 border-l-4 border-[#14B8A6]"
          >
            <div className="flex items-start gap-2">
              <Brain className="w-4 h-4 text-[#14B8A6] mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 mb-1">ABA Insight</p>
                <p className="text-sm text-gray-700">
                  Emma responded well to praise on Tuesday. Use immediate verbal praise + 2-min
                  preferred activity access.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center mt-4 text-sm text-gray-600 italic"
        >
          One journal entry. Three expert perspectives. Zero guesswork.
        </motion.p>
      </div>
    </motion.div>
  );
}
