import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";
interface Props extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECUNDARY";
}

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      bg={type === "SECUNDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "SECUNDARY" ? "red.600" : "yellow.400",
      }}
      _loading={{
        _spinner: { color: "black" },
      }}
      {...rest}
    >
      <Text
        textTransform="uppercase"
        fontSize="sm"
        fontFamily="heading"
        color={type === "SECUNDARY" ? "white" : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
