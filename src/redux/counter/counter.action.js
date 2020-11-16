export const increment = (number) => ({
  type: "INCREMENT",
  payload: {
    by: number,
  },
});

export const decrement = (number) => ({
  type: "DECREMENT",
  payload: {
    by: number,
  },
});
