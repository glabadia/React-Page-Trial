import _ from "lodash";
export const paginate = (items, currentIndex, pageSize) => {
  const startingIndex = (currentIndex - 1) * pageSize;
  return _(items)
    .slice(startingIndex)
    .take(pageSize)
    .value();
};
