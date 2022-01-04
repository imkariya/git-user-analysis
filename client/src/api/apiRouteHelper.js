export const getUserRoute = (user) => {
  return `user-detail/${user}`;
};

export const getRepoRoute = (user, pageNumber) => {
  return `repo-list/${user}?pageNumber=${pageNumber}`;
};
