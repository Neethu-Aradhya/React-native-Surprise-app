import React, { useState } from "react";
import { View, Switch, StyleSheet ,Text} from "react-native";

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f8f4"
       
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
       
      />
       {isEnabled && (
             <Text
            style={{
              textAlign: 'center',
              
              fontSize: 30,
              color: 'orange',
              fontWeight: 'BOLD',
            }}>
           Happy Birthday  

            
          </Text>
          )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SwitchScreen;