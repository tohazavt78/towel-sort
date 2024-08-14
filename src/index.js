module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  const flattened = matrix.reduce((acc, cur, i) => {
    if (i % 2 === 0) {
      cur.sort((a, b) => a - b);
    } else {
      cur.sort((a, b) => b - a);
    }
    return acc.concat(cur);
  }, []);

  return flattened;
}