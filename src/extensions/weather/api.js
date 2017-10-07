const axios = require('axios')
const {
	GraphQLSchema,
	GraphQLString,
	GraphQLObjectType
} = require('graphql')

const WeatherController = {
	getAction: async (req, res) => {
		const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Wroc%C5%82aw.pl&units=metric&appid=${process.env.WEATHER_API_KEY}`)

		return res.send(response.data);
	}
}

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'weather',
		description: 'Weather query schema',
		fields: () => ({
			city: {
				type: GraphQLString
			}
		})
	})
})
