import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Stack direction="row">
      <Badge
        px={2}
        py={1}
        borderRadius="lg"
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        colorScheme="blue"
        cursor="pointer"
        onClick={handleFunction}
      >
        {user.name}
        {admin === user._id && <span> (Admin)</span>}
        <CloseIcon pl={1} />
      </Badge>
    </Stack>
  );
};

export default UserBadgeItem;
