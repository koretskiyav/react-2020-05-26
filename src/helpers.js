export const calcReviewsAverageRating = (reviews) => {
  const totalRating = reviews.reduce((sum, current) => current.rating + sum, 0);

  const avRating = (totalRating / reviews.length).toFixed(1);

  return avRating;
};
