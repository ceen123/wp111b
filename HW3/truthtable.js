function truthTable(n) {
  if (n <= 0) {
    return [[]];
  }

  const prevTable = truthTable(n - 1);
  const table = [];

  for (const row of prevTable) {
    table.push([...row, 0]);
    table.push([...row, 1]);
  }

  return table;
}
