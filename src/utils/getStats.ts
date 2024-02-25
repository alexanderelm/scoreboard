import { firstRoundGames, secondRoundGames } from '../data/games.ts'
import { teams } from '../data/teams.ts'

export const getStats = (teamid: number) => {
  const firstRoundResults = firstRoundGames.filter(
    ({ home, away }) => home.id === teamid || away.id === teamid,
  )
  const secondRoundResults = secondRoundGames.filter(
    ({ home, away }) => home.id === teamid || away.id === teamid,
  )

  const matches = [...firstRoundResults, ...secondRoundResults]

  const wins = matches.filter(({ home, away }) => {
    if (home.id === teamid) return home.score > away.score
    return away.score > home.score
  }).length

  const winRate = ((wins / matches.length) * 100).toFixed(0)

  const teamName = teams.find((team) => team.id === teamid)?.name

  return {
    wins: wins,
    losses: matches.length - wins,
    winRate: winRate,
    games: matches.length,
    points: wins,
    name: teamName,
  }
}
