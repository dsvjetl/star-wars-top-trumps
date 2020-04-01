// trailing slash is required for SWAPI
export const axiosUrls = {
    getPersons: (personId: string) => (`/people/${personId}/`),
    getStarship: (starshipId: string) => (`/starships/${starshipId}/`),
};
