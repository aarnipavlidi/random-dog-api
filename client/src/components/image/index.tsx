interface ImageProps {
  imageSource: string;
  wrapperStyle?: string;
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <div className={props.wrapperStyle}>
      <img className="h-96 aspect-auto" src={props.imageSource} />
    </div>
  );
};

export default Image;

