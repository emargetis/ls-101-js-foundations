let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

for (let k in ages) {
  if (k === 'Spot') console.log('true');
}

console.log(ages.hasOwnProperty('Spot'));