interface ValueProps {
  totalLikes: number;
}

const Value: React.FC<ValueProps> = (props) => {
  return (
    <div className='border-solid rounded-lg border-2 border-slate-950 ml-2 p-2 h-full'>{props.totalLikes}</div>
  );
};

export default Value;
