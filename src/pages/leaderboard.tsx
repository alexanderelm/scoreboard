import { StatsCard } from '../components/game-card'

import { getStats } from '../utils/getStats.ts'
import { teams } from '../data/teams.ts'

export default function LeaderboardPage() {
  /** Sort teams by points */
  const rankedTeams = teams.map((data) => getStats(data.id)).sort((a, b) => b.points - a.points)

  return (
    <>
      <div className={'flex justify-center items-center py-10'}>
        <h1 className={'text-4xl font-bold'}>LEADERBOARD</h1>
      </div>

      <div className={'flex justify-center mx-8 py-8'}>
        <div className={'max-w-6xl space-y-4'}>
          {rankedTeams.map(({ name, games, winRate, points, wins, losses }, index) => {
            return (
              <StatsCard
                key={index}
                pos={`${index + 1}`}
                team={name}
                winRate={`${winRate}`}
                games={games}
                points={points}
                wins={wins}
                losses={losses}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
