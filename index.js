const dataset = require('./data/halal-crypto-2026.json');

function isHalal(ticker) {
  if (!ticker) return null;
  const match = dataset.find(item => item.ticker.toUpperCase() === ticker.trim().toUpperCase());
  if (!match) return null;
  return {
    name: match.name,
    ticker: match.ticker,
    category: match.cat,
    status: match.status,
    isCompliant: match.status === 'halal',
    spotAllowed: match.spot === 'allowed',
    stakingAllowed: match.staking === 'allowed',
    aaoifiBasis: match.basis,
    auditUrl: `https://halalcryptoindex.com/halal500#${match.ticker.toLowerCase()}-halal`
  };
}

module.exports = { isHalal, dataset };
