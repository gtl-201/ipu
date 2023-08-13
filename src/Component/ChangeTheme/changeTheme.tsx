import React from 'react';
import { View, Button } from 'react-native';
import { useTheme } from '../../Utils/Themes/index'; // Thay đường dẫn đúng
import { useTranslation } from 'react-i18next';

function ThemeSwitchScreen() {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <View>
      <Button title={t("TOGGLE_THEME")} onPress={toggleTheme} />
    </View>
  );
}

export default ThemeSwitchScreen;

