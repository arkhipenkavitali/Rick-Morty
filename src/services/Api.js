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
        return result.results.map(this._transformCharacter);
    }
    
    async getCharactersLength(){
        const result = await this.getResponse(`/character`);
        return result.info.count;
    }
    
    async getCharacter(id){
        const character = await this.getResponse(`/character/${id}`);
        return this._transformCharacter(character);
    }

    _transformCharacter = (character) => {
        return {
            image: character.image,
            name: character.name,
            gender: character.gender,
            species: character.species,
            status: character.status,
            created: character.created,
        }
    };
    
    async getAllLocations(){
        const result = await this.getResponse(`/location`);
        return result.results.map(this._transformLocation);
    }
    
    async getLocation(id){
        const result = await this.getResponse(`/location/${id}`);
        return this._transformLocation(result);
    }

    _transformLocation = (location) => {
        return {
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            residents: location.residents,
            created: location.created,
        }
    };

    async getAllEpizodes(){
        const result = await this.getResponse(`/episode`);
        return result.results;
    }
    
    getEpizode(id){
        return this.getResponse(`/episode/${id}`);
    }
}
