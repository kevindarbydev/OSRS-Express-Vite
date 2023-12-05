import { Button, ButtonProps } from "@chakra-ui/react";

interface StyledButtonProps extends ButtonProps {
  text: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ text, ...rest }) => {
  return (
    <Button variant="outline" colorScheme="blue" margin={1} {...rest}>
      {text}
    </Button>
  );
};

export default StyledButton;
