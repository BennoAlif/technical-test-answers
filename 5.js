const classement = {
  Indonesia: 0,
  Malaysia: 0,
  Jepang: 0,
  Cina: 0,
};

const matchResult = {
  NamaTeam1: ['Indonesia', 'Malaysia', 'Cina', 'Cina', 'Indonesia', 'Jepang'],
  NamaTeam2: ['Malaysia', 'Jepang', 'Malaysia', 'Indonesia', 'Jepang', 'Cina'],
  SkorTeam1: [5, 1, 3, 0, 0, 1],
  SkorTeam2: [2, 3, 0, 2, 0, 3],
};

function countTeamScore(classement, matchResult) {
  let { NamaTeam1, NamaTeam2, SkorTeam1, SkorTeam2 } = matchResult;

  NamaTeam1.map((_, index) => {
    if (SkorTeam1[index] > SkorTeam2[index]) {
      classement[NamaTeam1[index]] += 3;
    } else if (SkorTeam1[index] < SkorTeam2[index]) {
      classement[NamaTeam2[index]] += 3;
    } else {
      classement[NamaTeam1[index]] += 1;
      classement[NamaTeam2[index]] += 1;
    }
  });

  return classement;
}

console.log(countTeamScore(classement, matchResult));
//   Indonesia: 7,
//   Malaysia: 0,
//   Jepang: 4,
//   Cina: 6
