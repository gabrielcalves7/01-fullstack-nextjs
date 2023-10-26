import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "@src/screens/HomeScreen/patterns/Background/Background";
import Menu from "@src/screens/HomeScreen/patterns/Menu/Menu";
import Feed from "@src/screens/HomeScreen/patterns/Feed/Feed";
import Footer from "@src/screens/HomeScreen/patterns/Footer/Footer";

export default function HomeScreen() {
  return(
    <Box
      tag="main"
      styleSheet={{
        backgroundColor:'red',
        flex: 1,
        alignItems: 'center'
      }}
    >
      <Background />
      <Menu/>
      <Feed>
        <Feed.Header/>
        <Text>
          Últimas atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer/>
    </Box>
  )
}
