'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// Datos base y datos "actualizados" al hover
const dataA = {
  kpis: [
    { label: 'Ventas hoy', value: 2847, prefix: '€', trend: '+12%' },
    { label: 'Food cost',  value: 28.4, suffix: '%', decimals: 1, trend: '↓ 2.1%' },
    { label: 'Margen',     value: 71.6, suffix: '%', decimals: 1, trend: '+4.2%' },
    { label: 'Comensales', value: 124,  trend: '+8' },
  ],
  bars: [48, 63, 71, 58, 88, 100, 74],
  gauge: 57,
  gaugeLabel: '28.4%',
}

const dataB = {
  kpis: [
    { label: 'Ventas hoy', value: 3124, prefix: '€', trend: '+18%' },
    { label: 'Food cost',  value: 27.1, suffix: '%', decimals: 1, trend: '↓ 3.4%' },
    { label: 'Margen',     value: 72.9, suffix: '%', decimals: 1, trend: '+5.1%' },
    { label: 'Comensales', value: 138,  trend: '+22' },
  ],
  bars: [63, 71, 58, 88, 100, 74, 91],
  gauge: 49,
  gaugeLabel: '27.1%',
}

function FlashNumber({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  flash,
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  flash: boolean
}) {
  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString('es-ES')

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={`${value}`}
        initial={{ opacity: 0, y: flash ? -6 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.25 }}
        className={flash ? 'text-[#c8f135]' : 'text-white'}
      >
        {prefix}{formatted}{suffix}
      </motion.span>
    </AnimatePresence>
  )
}

const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

const topDishes = [
  { name: 'Chuletón 400g',  price: '€34', pct: 92 },
  { name: 'Lubina al horno', price: '€28', pct: 74 },
  { name: 'Tiramisú casero', price: '€8',  pct: 61 },
]

const alerts = [
  { item: 'Solomillo',      status: 'low' },
  { item: 'Vino Rioja Res.', status: 'low' },
  { item: 'Lubina fresca',  status: 'ok'  },
  { item: 'Patatas',        status: 'ok'  },
]

export default function DashboardMockup() {
  const [hovered, setHovered] = useState(false)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    if (hovered) {
      setFlash(true)
      const t = setTimeout(() => setFlash(false), 800)
      return () => clearTimeout(t)
    }
  }, [hovered])

  const data = hovered ? dataB : dataA

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="w-full bg-[#0A0F1E] rounded-2xl border border-[#1E293B] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] font-body text-white select-none cursor-default"
    >
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#060B15] border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ scale: hovered ? [1, 1.4, 1] : 1, opacity: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.4, repeat: hovered ? Infinity : 0, repeatDelay: 0.3 }}
            className="w-2 h-2 rounded-full bg-[#10B981] block"
          />
          <span className="text-xs font-semibold text-white">AgrauData · Restaurante</span>
        </div>
        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={hovered ? 'updating' : 'live'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`text-[10px] font-medium ${hovered ? 'text-[#c8f135]' : 'text-[#64748B]'}`}
            >
              {hovered ? '↻ Actualizando...' : 'En vivo · 20:14'}
            </motion.span>
          </AnimatePresence>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 border-b border-[#1E293B]">
        {data.kpis.map((kpi, i) => (
          <div key={i} className="px-3 py-3 border-r border-[#1E293B] last:border-r-0">
            <p className="text-[9px] text-[#64748B] mb-1 uppercase tracking-wider">
              {kpi.label}
            </p>
            <p className="text-sm font-bold leading-none mb-1">
              <FlashNumber
                value={kpi.value}
                decimals={kpi.decimals}
                prefix={kpi.prefix}
                suffix={kpi.suffix}
                flash={flash}
              />
            </p>
            <AnimatePresence mode="wait">
              <motion.span
                key={kpi.trend}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`text-[9px] font-semibold ${flash ? 'text-[#c8f135]' : 'text-[#10B981]'}`}
              >
                {kpi.trend}
              </motion.span>
            </AnimatePresence>
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
            {data.bars.map((pct, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  animate={{ height: `${pct}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`w-full rounded-t-sm ${
                    pct === 100 ? 'bg-[#2563EB]' : pct > 70 ? 'bg-[#1D4ED8]' : 'bg-[#1E3A5F]'
                  }`}
                />
                <span className="text-[8px] text-[#475569]">{days[i]}</span>
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
              <div key={i} className="flex items-center justify-between">
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
              </div>
            ))}
          </div>

          {/* Food cost gauge */}
          <div className="mt-4 pt-3 border-t border-[#1E293B]">
            <div className="flex justify-between mb-1">
              <span className="text-[9px] text-[#64748B]">Food cost objetivo</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={data.gaugeLabel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`text-[9px] font-semibold ${flash ? 'text-[#c8f135]' : 'text-[#10B981]'}`}
                >
                  {data.gaugeLabel}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${data.gauge}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
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
