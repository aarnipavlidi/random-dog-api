import type { GetAllDogsQuery } from '../../types/graphql/graphql';

import Button from '../button';
import TableHeading from './table.heading';
import DogItem from './item';

interface DogsProps {
  getDogs: any;
  dogsData: GetAllDogsQuery;
}

const Dogs: React.FC<DogsProps> = (props) => {

  const getDogsData = props.dogsData?.getAllDogs;

  const formatDogsData = getDogsData ? Object.keys(getDogsData.message): null;

  return (
    <section className="container mx-auto px-5 py-10">
      {
        !formatDogsData && <>
          <Button
            label="Show all dogs"
            onClick={props.getDogs}
          />
        </>
      }
      {
        formatDogsData && formatDogsData.length > 0 && <>
          <table className="container table-auto">
            <thead>
              <tr>
                <TableHeading label="Breeds" />
              </tr>
            </thead>
            <tbody>
              {
                formatDogsData.map((value) => {
                  return (
                    <DogItem
                      breedName={value}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </>
      }
    </section>
  );
};

export default Dogs;
