import axios from 'axios';

const resolvers = {
  Query: {
    getAllBreeds: async () => {
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
};

export default resolvers;