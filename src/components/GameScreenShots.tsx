import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShots from "../Hooks/useScreenShots";

interface Props{
    gameId: number
}


const GameScreenShots = ({gameId}: Props) => {
    const {data, isLoading, error} = useScreenShots(gameId);

    if (isLoading) return null

    if (error) throw Error

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
        {data?.results.map(file => <Image key={file.id} src={file.image}/>)}
    </SimpleGrid>
  )
}

export default GameScreenShots