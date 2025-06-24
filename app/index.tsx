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
          <Link href="/game_development" asChild>
        <Text style={{ margin: 8, fontSize: 18, color: 'blue' }}>
          Go to Game Development
        </Text>
      </Link>

      <Link href="/about_projects" asChild>
        <Text style={{ margin: 8, fontSize: 18, color: 'blue' }}>
          Go to About Projects
        </Text>
      </Link>

      <Link href="/experiences" asChild>
        <Text style={{ margin: 8, fontSize: 18, color: 'blue' }}>
          Go to Experiences
        </Text>
      </Link>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Im JunHyuk Kim. 
        Im currently studying computer science in university of queensland. 
        Expected to graduate at the end of 2025
      </Text>
    </View>
  );
}
