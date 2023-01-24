import { Textfit } from "react-textfit";

const Display = () => {

  return (
    <Textfit data-testid="display" id="display" mode={"single"} max={60}>
      012345
    </Textfit>
  );
};

export default Display;
