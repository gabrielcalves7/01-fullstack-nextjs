import Box from "@src/components/Box";
import theme from "@src/theme";
import styled from "styled-components"


const Cafe = styled.div`
  color: purple;
`

export default function HomeScreen(){
  return(
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
      }}
    > 
    <Cafe>
      tchau!
    </Cafe>
    </Box>
  )
}
