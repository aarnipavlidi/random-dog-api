CREATE OR REPLACE FUNCTION give_likes_for_chosen_dog(current_chosen_dog text)
RETURNS dogs as $$
DECLARE
  dog_data dogs%ROWTYPE;
BEGIN
  INSERT INTO dogs (breed, likes)
  VALUES (current_chosen_dog, 1)
  ON CONFLICT (breed)
  DO UPDATE SET likes = dogs.likes + 1
  RETURNING breed, likes, dislikes INTO dog_data;

  RETURN dog_data;
END;
$$ LANGUAGE plpgsql;