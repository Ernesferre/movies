export const sortFunction = (sort, mov) => {
  switch (sort) {
    case "up":
      mov.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

      break;
    case "down":
      mov.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });

      break;

    case "rating":
      mov.sort((a, b) => {
        if (a.vote_average < b.vote_average) {
          return 1;
        }
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        return 0;
      });
      break;

    default:
      break;
  }
};
