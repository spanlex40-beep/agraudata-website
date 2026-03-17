'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function AnimatedNumber({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  delay = 0,
}: {
  target: number
  decimals?: number
  prefix?: string
  suffix?: string
  delay?: number
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1400
      const steps = 50
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setValue(target)
          clearInterval(timer)
        } else {
          setValue(current)
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }, delay)
    return () => clearTimeout(timeout)
  }, [target, delay])

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString('es-ES')

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

const weekBars = [
  { day: 'L', pct: 48 },
  { day: 'M', pct: 63 },
  { day: 'X', pct: 71 },
  { day: 'J', pct: 58 },
  { day: 'V', pct: 88 },
  { day: 'S', pct: 100 },
  { day: 'D', pct: 74 },
]

const topDishes = [
  { name: 'Chuletón 400g', price: '€34', pct: 92 },
  { name: 'Lubina al horno', price: '€28', pct: 74 },
  { name: 'Tiramisú casero', price: '€8', pct: 61 },
]

const alerts = [
  { item: 'Solomillo', status: 'low' },
  { item: 'Vino Rioja Res.', status: 'low' },
  { item: 'Lubina fresca', status: 'ok' },
  { item: 'Patatas', status: 'ok' },
]

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full bg-[#0A0F1E] rounded-2xl border border-[#1E293B] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] font-body text-white select-none"
    >
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#060B15] border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs font-semibold text-white">AgrauData · Restaurante</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#64748B]">En vivo · 20:14</span>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 border-b border-[#1E293B]">
        {[
          {
            label: 'Ventas hoy',
            value: 2847,
            prefix: '€',
            trend: '+12%',
            trendUp: true,
            delay: 100,
          },
          {
            label: 'Food cost',
            value: 28.4,
            suffix: '%',
            decimals: 1,
            trend: '↓ 2.1%',
            trendUp: true,
            delay: 200,
          },
          {
            label: 'Margen',
            value: 71.6,
            suffix: '%',
            decimals: 1,
            trend: '+4.2%',
            trendUp: true,
            delay: 300,
          },
          {
            label: 'Comensales',
            value: 124,
            trend: '+8',
            trendUp: true,
            delay: 400,
          },
        ].map((kpi, i) => (
          <div
            key={i}
            className="px-3 py-3 border-r border-[#1E293B] last:border-r-0"
          >
            <p className="text-[9px] text-[#64748B] mb-1 uppercase tracking-wider">
              {kpi.label}
            </p>
            <p className="text-sm font-bold text-white leading-none mb-1">
              <AnimatedNumber
                target={kpi.value}
                decimals={kpi.decimals}
                prefix={kpi.prefix}
                suffix={kpi.suffix}
                delay={kpi.delay}
              />
            </p>
            <span className="text-[9px] font-semibold text-[#10B981]">
              {kpi.trend}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-5">
        {/* Bar chart + top dishes */}
        <div className="col-span-3 p-3 border-r border-[#1E293B]">
          <p className="text-[9px] text-[#64748B] uppercase tracking-wider mb-2">
            Ventas por día
          </p>
          <div className="flex items-end gap-1 h-14 mb-3">
            {weekBars.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.pct}%` }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: 'easeOut' }}
                  className={`w-full rounded-t-sm ${
                    bar.day === 'S'
                      ? 'bg-[#2563EB]'
                      : bar.pct > 70
                      ? 'bg-[#1D4ED8]'
                      : 'bg-[#1E3A5F]'
                  }`}
                />
                <span className="text-[8px] text-[#475569]">{bar.day}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#1E293B] pt-2">
            <p className="text-[9px] text-[#64748B] uppercase tracking-wider mb-1.5">
              Top platos
            </p>
            {topDishes.map((dish, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                <span className="text-[8px] text-[#94A3B8] w-3">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[9px] text-white">{dish.name}</span>
                    <span className="text-[9px] text-[#64748B]">{dish.price}</span>
                  </div>
                  <div className="h-0.5 bg-[#1E293B] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dish.pct}%` }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                      className="h-full bg-[#2563EB] rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="col-span-2 p-3">
          <p className="text-[9px] text-[#64748B] uppercase tracking-wider mb-2">
            Alertas stock
          </p>
          <div className="space-y-1.5">
            {alerts.map((alert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="flex items-center justify-between"
              >
                <span className="text-[9px] text-[#CBD5E1]">{alert.item}</span>
                <span
                  className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${
                    alert.status === 'low'
                      ? 'bg-[#7F1D1D]/60 text-[#FCA5A5]'
                      : 'bg-[#14532D]/60 text-[#86EFAC]'
                  }`}
                >
                  {alert.status === 'low' ? '⚠ Bajo' : '✓ OK'}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Food cost gauge */}
          <div className="mt-4 pt-3 border-t border-[#1E293B]">
            <div className="flex justify-between mb-1">
              <span className="text-[9px] text-[#64748B]">Food cost objetivo</span>
              <span className="text-[9px] text-[#10B981] font-semibold">28.4%</span>
            </div>
            <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '57%' }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"
              />
            </div>
            <div className="flex justify-between mt-0.5">
              <span className="text-[8px] text-[#475569]">0%</span>
              <span className="text-[8px] text-[#475569]">Límite 35%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
