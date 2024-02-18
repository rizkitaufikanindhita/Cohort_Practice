const CustomButton = (props) => {
  const counter = () => {
    // eslint-disable-next-line react/prop-types
    props.setCount(props.count + 1);
  };

  // eslint-disable-next-line react/prop-types
  return <button onClick={counter}>Count {props.count}</button>;
};

export default CustomButton;
