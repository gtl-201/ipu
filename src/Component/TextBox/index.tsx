import React, { FC, memo } from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

interface TextBoxProps {
  children?: string;
  style?: any;
}

const TextBox: FC<TextBoxProps> = ({ children, style }) => {
  const { t } = useTranslation();
  return (
    <Text style={
      [style ? style : {},
      { fontFamily: 'Nosifer-Regular'}
      ]}>

      {children ? t(children) : children}
    </Text>
  );
};

export default memo(TextBox);
