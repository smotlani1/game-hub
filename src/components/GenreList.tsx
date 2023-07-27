import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres from "../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
