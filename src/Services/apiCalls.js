

export const fetchHouses = async () => {
	try {
		const response = await fetch('http://localhost:3001/api/v1/houses')
		const houses = response.json()
		houses.then( house => fetchHouseMembers(house) )
	} catch (error) {
		return error;
	}
};

export const fetchHousemembers = async (houses) => {
	  const fullHouses = houses.map( (house) => {
    let houseStructure = {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons,
      words: house.words
    };

    const unresolvedPromises = house.swornMembers.map( member => {
    	return fetch('http://localHost:3001/api/v1/character', {
    		method: 'POST',
    		body: JSON.stringify( {url: member}),
    		headers: {
    			'Content-Type': 'application/json'
    		}
    	})
    	.then(response => response.json())
    	.then( character => character.name)
    });

    return Promise.all(unresolvedPromises).then( members => 
    	Object.assign(houseStructure, {swornMembers: members})
    	);
    })
    return Promise.all(fullHouses).then(house => house)
}