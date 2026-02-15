import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import type { IconType } from 'react-icons'

export type AllyBrand = {
  id: string
  name: string
  type: 'icon' | 'image' | 'letter'
  icon?: IconType
  image?: string
  letter?: string
  since?: string
  imageScale?: number
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend
)

export type AllyStats = {
  engagementRate: number
  successRate: number
  totalImpressions: number
  adsGenerated: number
  impressionsByQuarter: number[]
  engagementByChannel: { label: string; value: number }[]
}

const formatImpressions = (n: number) => {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`
  return String(n)
}

function BrandLogo({ brand }: { brand: AllyBrand }) {
  const iconSize = 28
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1">
      {brand.type === 'icon' && brand.icon && (
        <brand.icon className="text-[var(--laneta-purple)]" size={iconSize} />
      )}
      {brand.type === 'image' && brand.image && (
        <img
          src={brand.image}
          alt=""
          className="h-full w-full object-contain"
          style={brand.imageScale != null ? { transform: `scale(${brand.imageScale})` } : undefined}
        />
      )}
      {(brand.type === 'letter' || (!brand.icon && !brand.image)) && (
        <span className="text-lg font-bold text-[var(--laneta-purple)]">
          {brand.letter || brand.name.charAt(0)}
        </span>
      )}
    </div>
  )
}

export function AllyDashboard({ brand, stats }: { brand: AllyBrand; stats: AllyStats }) {
  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Impressions (K)',
        data: stats.impressionsByQuarter.map((v) => Math.round(v / 1000)),
        backgroundColor: 'rgba(102, 65, 237, 0.7)',
        borderColor: 'rgb(102, 65, 237)',
        borderWidth: 1,
      },
    ],
  }

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${formatImpressions((ctx.raw as number) * 1000)} impressions`,
        },
      },
    },
    scales: {
      y: { beginAtZero: true, ticks: { maxTicksLimit: 5 } },
    },
  }

  const doughnutData = {
    labels: stats.engagementByChannel.map((c) => c.label),
    datasets: [
      {
        data: stats.engagementByChannel.map((c) => c.value),
        backgroundColor: [
          'rgba(255, 71, 172, 0.8)',
          'rgba(102, 65, 237, 0.8)',
          'rgba(121, 188, 247, 0.8)',
          'rgba(248, 124, 99, 0.8)',
        ],
        borderColor: ['#ff47ac', '#6641ed', '#79bcf7', '#f87c63'],
        borderWidth: 1,
      },
    ],
  }

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
    },
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      {/* Header: logo + name */}
      <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
        <BrandLogo brand={brand} />
        <div>
          <h4 className="text-lg font-bold text-slate-800">{brand.name}</h4>
          {brand.since && (
            <p className="text-xs text-slate-500">Partner since {brand.since}</p>
          )}
        </div>
      </div>

      {/* KPI cards */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl bg-[var(--laneta-purple)]/10 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-[var(--laneta-purple)]">{stats.engagementRate}%</p>
          <p className="text-xs font-medium text-slate-600">Avg. engagement</p>
        </div>
        <div className="rounded-xl bg-[var(--laneta-pink)]/10 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-[var(--laneta-pink)]">{stats.successRate}%</p>
          <p className="text-xs font-medium text-slate-600">Success rate</p>
        </div>
        <div className="rounded-xl bg-[var(--laneta-blue)]/10 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-[var(--laneta-blue)]">
            {formatImpressions(stats.totalImpressions)}
          </p>
          <p className="text-xs font-medium text-slate-600">Total impressions</p>
        </div>
        <div className="rounded-xl bg-slate-100 px-4 py-3 text-center">
          <p className="text-2xl font-bold text-slate-700">{stats.adsGenerated}</p>
          <p className="text-xs font-medium text-slate-600">Ads generated</p>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Impressions by quarter</p>
          <div className="h-48">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Engagement by channel</p>
          <div className="h-48">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}
