export const isContainRoute = (state: [{ path: string, url: string, title: string }], route: string): boolean =>
    state.some(({ url }) => url === route);

/*
 * state -- history state of app
 * url -- url of current breadcrumb */
export const removeRemainingCrumbs = (state: [{ path: string, url: string, title: string }], url: string) => {
    const index = state.findIndex(({ url: route }) => route === url);
    return state.slice(0, index);
};

export const HOME_CRUMB: { path: string, url: string, title: string } = { path: '/', url: '/', title: 'Home' };

console.log([HOME_CRUMB]);
console.log(isContainRoute([HOME_CRUMB], window.location.pathname));