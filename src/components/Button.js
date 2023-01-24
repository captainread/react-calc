// function to add unique styling for operation buttons
const getStyle = (btn) => {
  const className = {
    "=": "special",
    "C": "special",
    "x": "operation",
    "-": "operation",
    "/": "operation",
    "+": "operation",
  };
  return className[btn];
};

const Button = ({ value }) => {
  return (
    <button className={`${getStyle(value)} calc-btn`} data-testid="button">
      {value}
    </button>
  );
};

export default Button;
