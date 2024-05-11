function shuffleProduct(...strings) {
  if (strings.length === 0) {
    return ['']
  } else if (strings.length === 1) {
    return strings[0].split('')
  } else {
    let str1 = strings[0]
    let rest = shuffleProduct(...strings.slice(1))
    let m = str1.length,
      n = rest.length
    let dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => []))

    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i === 0 && j === 0) {
          dp[i][j] = ['']
        } else if (i === 0) {
          dp[i][j] = dp[i][j - 1].map((k) => k + rest[j - 1])
        } else if (j === 0) {
          dp[i][j] = dp[i - 1][j].map((k) => k + str1[i - 1])
        } else {
          dp[i][j] = dp[i - 1][j]
            .map((k) => k + str1[i - 1])
            .concat(dp[i][j - 1].map((k) => k + rest[j - 1]))
        }
      }
    }

    let li = dp[m][n]
    let freqMap = new Map()
    for (let item of li) {
      if (freqMap.has(item)) {
        freqMap.set(item, freqMap.get(item) + 1)
      } else {
        freqMap.set(item, 1)
      }
    }

    return freqMap
  }
}

function countAs(input) {
  let counts = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
      count++
    } else if (input[i] === 'b') {
      counts.push(count + 1)
      count = 0
    }
  }

  // Add the last count if the input doesn't end with 'b'
  if (count > 0) {
    counts.push(count + 1)
  }

  return counts
}

export { shuffleProduct, countAs }
