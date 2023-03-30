interface ImageProps {
  imageSource: string;
  wrapperStyle?: string;
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <div className={props.wrapperStyle}>
      <img className="max-h-150 aspect-square" src={props.imageSource} />
    </div>
  );
};

export default Image;

