
const environment ='https://cors-anywhere.herokuapp.com/https://api.deezer.com';

export class ApiUrls {
    static album = `${environment}/album/`;
    static genre = `${environment}/genre/`;
    static artist = `${environment}/artist/`;
    static search = `${environment}/search?q=`;
}