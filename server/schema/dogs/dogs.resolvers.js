import axios from 'axios';
import supabase from '../../utils/supabase.js';

const randomDogImage = (currentDogImages) => {
  const randomIndex = Math.floor(Math.random() * currentDogImages.length);
  const getRandomImage = currentDogImages[randomIndex];

  return getRandomImage;
};

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
    getChosenDog: async (_, { breed }) => {
      try {
        const formatName = breed.toLowerCase();
        const response = await axios.get(`https://dog.ceo/api/breed/${formatName}/images`)

        const getChosenDogData = await supabase
          .from('dogs')
          .select('breed, likes, dislikes')
          .eq('breed', formatName);

        return {
          message: randomDogImage(response.data.message),
          status: response.data.status,
          data: getChosenDogData.data[0] || { breed: formatName },
        }
      } catch (error) {
        throw new Error('There was an issue fetching chosen dog breed data. Please try again later!');
      }
    },
  },
  Dogs: {
    message: (value) => value.message || {},
  },
  Mutation: {
    giveLikesForChosenDog: async (_, { breed }) => {
      try {
        const formatName = breed.toLowerCase();
        const updateChosenDog = await supabase.rpc('give_likes_for_chosen_dog', { current_chosen_dog: formatName });

        return updateChosenDog.data;
      } catch (error) {
        throw new Error('There was an issue giving a new like for chosen dog. Please try again later!');
      }
    },
    giveDislikesForChosenDog: async (_, { breed }) => {
      try {
        const formatName = breed.toLowerCase();
        const updateChosenDog = await supabase.rpc('give_dislikes_for_chosen_dog', { current_chosen_dog: formatName });

        return updateChosenDog.data;
      } catch (error) {
        throw new Error('There was an issue giving a new dislike for chosen dog. Please try again later!');
      }
    },
  },
};

export default resolvers;