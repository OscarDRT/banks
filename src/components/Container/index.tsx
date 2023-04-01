import React from 'react';
import {StatusBar, StatusBarStyle, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

interface ContainerProps {
  margins?: boolean;
  edges?: React.ComponentProps<typeof SafeAreaView>['edges'];
  children: React.ReactNode;
  barStyle?: StatusBarStyle;
}

export const Container: React.FC<ContainerProps> = ({
  margins,
  children,
  edges = [],
  barStyle = 'light-content',
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: edges.includes('top') ? insets.top : 0,
          paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
          backgroundColor: '#FFFFFF',
        },
      ]}
      {...props}>
      <StatusBar barStyle={barStyle} backgroundColor={'transparent'} />

      <View style={[{flex: 1}, margins && {marginHorizontal: 16}]}>
        {children}
      </View>
    </View>
  );
};
