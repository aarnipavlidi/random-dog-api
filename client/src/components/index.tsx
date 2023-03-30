import type { GetAllDogsQuery } from '../types/graphql/graphql';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Dogs from './dogs';
import Dog from './dog';

import useGetAllDogs from '../hooks/useGetAllDogs';

const Main: React.FC = () => {
  const [getDogs, dogsData] = useGetAllDogs();

  return (
    <div className="bg-slate-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Dogs getDogs={getDogs} dogsData={dogsData as GetAllDogsQuery} />} />
          <Route path="/:id" element={<Dog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;

