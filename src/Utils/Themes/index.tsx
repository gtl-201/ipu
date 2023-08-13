import React, { createContext, useContext, useState, ReactNode } from 'react';
import darkTheme from './dark';
import lightTheme from './light';

interface ThemeContextType {
  theme: any;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Hoặc bạn có thể lấy giá trị này từ AsyncStorage hoặc bất kỳ nguồn dữ liệu nào khác

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
