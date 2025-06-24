import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Im JunHyuk Kim. 
        Im currently studying computer science in university of queensland. 
        Expected to graduate at the end of 2025.
      </Text>
      <Text>
        I developed multiple games.
        I go by the name Kanchovy in itch.io
      </Text>
          <Link href="/game_development" asChild>
        <Text style={{ margin: 8, fontSize: 18, color: 'blue' }}>
          Go to Game Development.
        </Text>
      </Link>
      <Text>
        I developed multiple games.
      </Text>
      <Link href="/about_projects" asChild>
        <Text style={{ margin: 8, fontSize: 18, color: 'blue' }}>
          Go to About Projects
        </Text>
      </Link>
    </View>
  );
}
