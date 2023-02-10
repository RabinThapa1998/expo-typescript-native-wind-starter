import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button } from "react-native";
function App() {
  return (
    <SafeAreaView className="border border-gray-300">
      <View className="px-3 py-5">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Text>Hello World</Text>
        <Text className="text-blue-500 text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
          dicta nihil unde eos enim iste reiciendis temporibus officia quae
          consequuntur, aliquid quos recusandae ipsa aperiam, similique nisi
          quasi nobis repellendus fuga optio. Accusamus?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
          dicta nihil unde eos enim iste reiciendis temporibus officia quae
          consequuntur, aliquid quos recusandae ipsa aperiam, similique nisi
          quasi nobis repellendus fuga optio. Accusamus?
        </Text>
        <Button title="Click Me" className="bg-orange-500 w-1/2 border" />
      </View>
    </SafeAreaView>
  );
}

export default App;
