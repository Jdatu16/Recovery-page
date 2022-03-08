export const stateChangeHandler = (setState, par, changeWith) => {
  setState((prev) => {
    return { ...prev, [par]: changeWith };
  });
};
