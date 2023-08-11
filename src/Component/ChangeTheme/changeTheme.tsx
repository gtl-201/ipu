import React from 'react';
import { View, Button } from 'react-native';
import { useTheme } from '../../Utils/Themes/index'; // Thay đường dẫn đúng

function ThemeSwitchScreen() {
  const { toggleTheme } = useTheme();

  return (
    <View>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

export default ThemeSwitchScreen;
