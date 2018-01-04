

export const fetchHouses = async () => {
	try {
		const houseResponse = await fetch('http://localhost:3001/api/v1/houses')
		const houses = houseResponse.json()
		return houses;
	} catch (error) {
		return error;
	}
};
