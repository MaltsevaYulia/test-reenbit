export const getTrips = state => state.trips.items;

export const getIsLoading = state => state.trips.isLoading;

export const getError = state => state.trips.error;

export const getFilterValue = state => state.filter;

export const getIsLogedIn = state => state.auth.isLogedIn;

export const getUser = state => state.auth.user;
