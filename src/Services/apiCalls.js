

export const fetchHouses = async () => {
	try {
		const response = await fetch('http://localhost:3001/api/v1/houses')
		return await response.json()
	} catch (error) {
		return error;
	}
};

export const fetchHouseMembers = async (members) => {
	const membersPromises = members.map( async (link) => {
		return await fetchCharacter(link)
	})

	const houseMembers = await Promise.all(membersPromises)
	return houseMembers
}

export const fetchCharacter = async (link) => {
	const fetchedChar = await fetch('http://localhost:3001/api/v1/character', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({link})
	})
	const member = await fetchedChar.json();
	console.log(member.name)
	return member.name
}

export const getSwornMembers = async ( swornMembers ) => {
  const members = await swornMembers.map( async (link) => {
  	return await fetchCharacter(link)
  });
  console.log(members)
  const swornHouseMembers = members
  return swornHouseMembers
};




