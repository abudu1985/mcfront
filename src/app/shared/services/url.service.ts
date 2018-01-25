
export class UrlService{
    private baseRestUrl = 'http://localhost/mcback/api/';
    private baseSiteUrl = 'http://localhost/mcback/';

    public getRestUrl(url: string = ''): string {
        return this.baseRestUrl + url;
    }

    public getSiteUrl(url: string = ''): string {
        return this.baseSiteUrl + url;
    }
}