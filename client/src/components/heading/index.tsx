interface HeadingProps {
  value: string;
  tag: 'h1' | 'h2' | 'h3';
  headingStyle?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const Tag = props.tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={props.headingStyle}>{props.value}</Tag>
  );
};

export default Heading;
