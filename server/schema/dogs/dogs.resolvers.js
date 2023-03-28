import axios from 'axios';

const resolvers = {
  Query: {
    getAllDogs: async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        return response.data;
      } catch (error) {
        throw new Error('There was an issue fetching dogs breed data. Please try again later!');
      }
    },
  },
  Dogs: {
    message: (value) => value.message || {},
  },
  Mutation: {
    getChosenDog: async (_, { name }) => {
      try {
        const formatName = name.toLowerCase();
        const response = await axios.get(`https://dog.ceo/api/breed/${formatName}/images`)
        return response.data;
      } catch (error) {
        throw new Error('There was an issue fetching chosen dog breed data. Please try again later!');
      }
    },
  },
};

export default resolvers;