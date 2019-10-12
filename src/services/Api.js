export default class Api {
    
    _apiBase = 'https://rickandmortyapi.com/api/';
    
    async getResponse(url){
        const result = await fetch(`${this._apiBase}${url}`);
        
        if(!result.ok){
            throw new Error(`Fail ${url} with ${result.status}`)
        }
        
        return await result.json();
    }
    
    async getAllCharacters(){
        const result = await this.getResponse(`/character`);
        return result.results;
    }
    
    getCharacter(id){
        return this.getResponse(`/character/${id}`);
    }
    
    async getAllLocations(){
        const result = await this.getResponse(`/location`);
        return result.results;
    }
    
    getLocation(id){
        return this.getResponse(`/location/${id}`);
    }
    
    async getAllEpizodes(){
        const result = await this.getResponse(`/episode`);
        return result.results;
    }
    
    getEpizode(id){
        return this.getResponse(`/episode/${id}`);
    }
}
