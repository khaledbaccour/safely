import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: 'Posts',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people-outline' : 'people-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="(chat)"
        options={{
          tabBarShowLabel: false,
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox-outline' : 'chatbox-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarShowLabel: false,
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search-outline' : 'search-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="ask"
        options={{
          tabBarShowLabel: false,
          title: 'Ask',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'help-outline' : 'help-outline'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings-outline' : 'settings-outline'} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
