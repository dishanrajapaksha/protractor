import { BingPom } from "../pages/bing.pom";

describe('Search', () => {

    const bingPom = new BingPom();

    it('must be able to search a given query',async ()=>{
        await bingPom.Open();
        await bingPom.Search();
    });
});
