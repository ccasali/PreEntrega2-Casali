import { Text, Flex } from "@chakra-ui/react"
import { CiShoppingCart } from "react-icons/ci";

export const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"center"} width={100}>
            <CiShoppingCart size={30} />
            <Text fontSize={"1.5rem"}>50</Text>
        </Flex>
    );
};

