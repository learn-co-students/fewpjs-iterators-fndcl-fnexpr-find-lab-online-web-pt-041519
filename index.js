function superbowlWin(record) {
  const yearData = record.find(record => record.result === "W")
  return !!yearData ? yearData.year : yearData
}
