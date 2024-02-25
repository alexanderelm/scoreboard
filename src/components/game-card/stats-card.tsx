import { Stats } from 'react-daisyui'

export type GameCardProps = {
  pos: string
  team?: string
  winRate: string
  games?: number
  points?: number
  wins: number
  losses: number
}

export const StatsCard = ({ games, pos, winRate, team, points, wins, losses }: GameCardProps) => {
  return (
    <Stats
      className={'w-full md:grid-cols-10 rounded-none shadow stats-vertical md:stats-horizontal'}
    >
      <Stats.Stat className={'place-items-center shadow md:col-span-1'}>
        <Stats.Stat.Item variant={'title'}>POS</Stats.Stat.Item>
        <Stats.Stat.Item variant={'value'}>{pos}</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat className={'place-items-center md:col-span-5'}>
        <Stats.Stat.Item variant={'title'}>TEAM</Stats.Stat.Item>
        <Stats.Stat.Item variant={'value'}>{team}</Stats.Stat.Item>
        <Stats.Stat.Item variant={'desc'}>Team name</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat className={'place-items-center md:col-span-2'}>
        <Stats.Stat.Item variant={'title'}>WIN RATE</Stats.Stat.Item>
        <Stats.Stat.Item variant={'value'}>{`${winRate}%`}</Stats.Stat.Item>
        <Stats.Stat.Item variant={'desc'}>{`${wins} - ${losses}`}</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat className={'place-items-center md:col-span-2'}>
        <Stats.Stat.Item variant={'title'}>POINTS</Stats.Stat.Item>
        <Stats.Stat.Item variant={'value'}>{points}</Stats.Stat.Item>
        <Stats.Stat.Item variant={'desc'}>{`${games} Matches`}</Stats.Stat.Item>
      </Stats.Stat>
    </Stats>
  )
}
