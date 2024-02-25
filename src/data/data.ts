export const firstRoundGames = [
  { home: { id: 1, score: 10 }, away: { id: 2, score: 5 } },
  { home: { id: 1, score: 10 }, away: { id: 3, score: 3 } },
  { home: { id: 1, score: 8 }, away: { id: 4, score: 10 } },
  { home: { id: 1, score: 8 }, away: { id: 5, score: 10 } },
  { home: { id: 1, score: 8 }, away: { id: 6, score: 10 } },
  { home: { id: 1, score: 8 }, away: { id: 7, score: 10 } },
  { home: { id: 1, score: 8 }, away: { id: 8, score: 10 } },

  { home: { id: 2, score: 12 }, away: { id: 3, score: 10 } },
  { home: { id: 2, score: 12 }, away: { id: 4, score: 10 } },
  { home: { id: 2, score: 12 }, away: { id: 5, score: 10 } },
  { home: { id: 2, score: 12 }, away: { id: 6, score: 10 } },
  { home: { id: 2, score: 12 }, away: { id: 7, score: 10 } },
  { home: { id: 2, score: 12 }, away: { id: 8, score: 10 } },

  { home: { id: 3, score: 12 }, away: { id: 4, score: 10 } },
  { home: { id: 3, score: 12 }, away: { id: 5, score: 10 } },
  { home: { id: 3, score: 12 }, away: { id: 6, score: 10 } },
  { home: { id: 3, score: 12 }, away: { id: 7, score: 10 } },
  { home: { id: 3, score: 12 }, away: { id: 8, score: 10 } },

  { home: { id: 4, score: 12 }, away: { id: 5, score: 10 } },
  { home: { id: 4, score: 12 }, away: { id: 6, score: 10 } },
  { home: { id: 4, score: 12 }, away: { id: 7, score: 10 } },
  { home: { id: 4, score: 12 }, away: { id: 8, score: 10 } },

  { home: { id: 5, score: 12 }, away: { id: 6, score: 10 } },
  { home: { id: 5, score: 12 }, away: { id: 7, score: 10 } },
  { home: { id: 5, score: 12 }, away: { id: 8, score: 10 } },

  { home: { id: 6, score: 12 }, away: { id: 7, score: 10 } },
  { home: { id: 6, score: 12 }, away: { id: 8, score: 10 } },

  { home: { id: 7, score: 12 }, away: { id: 8, score: 10 } },
]

export const secondRoundGames = [
  { home: { id: 2, score: 8 }, away: { id: 1, score: 10 } },
  { home: { id: 3, score: 8 }, away: { id: 1, score: 10 } },
  { home: { id: 4, score: 8 }, away: { id: 1, score: 10 } },
  { home: { id: 5, score: 8 }, away: { id: 1, score: 10 } },
  { home: { id: 6, score: 8 }, away: { id: 1, score: 10 } },
  { home: { id: 7, score: 8 }, away: { id: 1, score: 10 } },
  { home: { id: 8, score: 8 }, away: { id: 1, score: 10 } },

  { home: { id: 3, score: 12 }, away: { id: 2, score: 10 } },
  { home: { id: 4, score: 12 }, away: { id: 2, score: 10 } },
  { home: { id: 5, score: 12 }, away: { id: 2, score: 10 } },
  { home: { id: 6, score: 12 }, away: { id: 2, score: 10 } },
  { home: { id: 7, score: 12 }, away: { id: 2, score: 10 } },
  { home: { id: 8, score: 12 }, away: { id: 2, score: 10 } },

  { home: { id: 4, score: 12 }, away: { id: 3, score: 10 } },
  { home: { id: 5, score: 12 }, away: { id: 3, score: 10 } },
  { home: { id: 6, score: 12 }, away: { id: 3, score: 10 } },
  { home: { id: 7, score: 12 }, away: { id: 3, score: 10 } },
  { home: { id: 8, score: 12 }, away: { id: 3, score: 10 } },

  { home: { id: 5, score: 12 }, away: { id: 4, score: 10 } },
  { home: { id: 6, score: 12 }, away: { id: 4, score: 10 } },
  { home: { id: 7, score: 12 }, away: { id: 4, score: 10 } },
  { home: { id: 8, score: 12 }, away: { id: 4, score: 10 } },

  { home: { id: 6, score: 12 }, away: { id: 5, score: 10 } },
  { home: { id: 7, score: 12 }, away: { id: 5, score: 10 } },
  { home: { id: 8, score: 12 }, away: { id: 5, score: 10 } },

  { home: { id: 7, score: 12 }, away: { id: 6, score: 10 } },
  { home: { id: 8, score: 12 }, away: { id: 6, score: 10 } },

  { home: { id: 8, score: 12 }, away: { id: 7, score: 10 } },
]

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

  const teamName = teams.find((team) => team.id === teamid)?.name

  return {
    wins: wins,
    losses: matches.length - wins,
    winRate: ((wins / matches.length) * 100).toFixed(0),
    games: matches.length,
    points: wins * 3,
    name: teamName,
  }
}

export const teams = [
  { id: 1, name: 'Casper x Christoffer', players: [{ name: 'Casper' }, { name: 'Christoffer' }] },
  { id: 2, name: 'Claire x Christian', players: [{ name: 'Claire' }, { name: 'Christian' }] },
  { id: 3, name: 'Johan x Kathrine', players: [{ name: 'Johan' }, { name: 'Kathrine' }] },
  { id: 4, name: 'Mathilde x Nicklas', players: [{ name: 'Mathilde' }, { name: 'Nicklas' }] },
  { id: 5, name: 'Alexandre x Camille', players: [{ name: 'Alexandre' }, { name: 'Camille' }] },
  { id: 6, name: 'Annabel x Angel', players: [{ name: 'Annabel' }, { name: 'Angel' }] },
  { id: 7, name: 'Sabine x Lukas', players: [{ name: 'Sabine' }, { name: 'Lukas' }] },
  { id: 8, name: 'Lasse x Mads', players: [{ name: 'Lasse' }, { name: 'Mads' }] },
]
