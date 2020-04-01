// trailing slash is required for SWAPI
export const axiosUrls = {
    getPerson: (personId: string) => (`/people/${personId}/`),
    getStarship: (starshipId: string) => (`/starships/${starshipId}/`),
};
