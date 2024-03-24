export const getQueryKeyBoardgames = (searchValue, sortValue, filteredValues, paginationValue) => [
  "BoardgamesFetch",
  searchValue,
  sortValue,
  filteredValues,
  paginationValue,
];
export const getQueryKeyPriceBounds = () => ["PriceBoundsFetch"];
export const getQueryKeyGameDurationBounds = () => ["GameDurationBoundsFetch"];
export const getQueryKeyBoardgamesCartByIds = (ids) => ["BoardgameCartByIds", ids];
export const getQueryKeySetBoardgamesCartByIds = (ids) => ["SetBoardgameCartByIds", ids];
export const getQueryKeyGetCart = () => ["GetCartFetch"];
export const getQueryKeyFilters = () => ["GetFiltersFetch"];
export const getQueryKeyUserData = () => ["GetUserData"];