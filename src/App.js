import { useState } from "react"

import { Box, Container, Input, Stack, Heading, Button } from "@chakra-ui/react"

function App() {
  const [input, setInput] = useState("0")
  const [guessNumber, setGuessNumber] = useState(-1)
  const [announce, setAnnounce] = useState("Click play to start")

  const newGame = () => {
    const min = 0
    const max = 100
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    setInput("0")
    setGuessNumber(num)
    setAnnounce("Guess the number")
  }

  const inputHandler = (e) => {
    setInput(e.target.value)
    const parsed = parseFloat(e.target.value)
    switch(true) {
      case parsed > guessNumber:
        setAnnounce(`${parsed} is high`)
        break;
      case parsed < guessNumber:
        setAnnounce(`${parsed} is low`)
        break;
      case parsed === guessNumber:
        setAnnounce(`Bingo! ${parsed} is the number`)
        break;
      default:
        break;
    }
  }

  return (
    <Box display="flex" position="fixed" boxSize="full">
      <Container alignSelf="center">
        <Stack>
          <Heading>
            {announce}
          </Heading>
          <Input 
            type="number"
            min="0"
            max="100"
            value={input}
            disabled={guessNumber === -1 || guessNumber === parseFloat(input)}
            onChange={inputHandler}
            />
          <Button
            onClick={newGame}>
            {
              announce === "Click play to start"
              ? "Play"
              : guessNumber !== parseFloat(input)
                ? "Reset"
                : "Play again"
            }
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
