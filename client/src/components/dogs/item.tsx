import { Link } from 'react-router-dom';

interface DogItemProps {
  breedName: string;
}

const DogItem: React.FC<DogItemProps> = (props) => {
  return (
    <tr id={props.breedName} className="font-pier-sans text-left">
      <Link to={`${props.breedName}`}>
        <th>{props.breedName}</th>
      </Link>
    </tr>
  );
};

export default DogItem;
