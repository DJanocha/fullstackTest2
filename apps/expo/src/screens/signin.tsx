import React from "react";

import { SafeAreaView, View } from "react-native";

import SignInWithOAuth from "../components/SignInWithOAuth";

export const SignInSignUpScreen = () => {
  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="flex h-full w-full flex-col justify-end border-2">
        <SignInWithOAuth
          buttonLabel="sign in with discord"
          strategy="oauth_discord"
        />
        <SignInWithOAuth
          buttonLabel="sign in with google"
          strategy="oauth_google"
        />
      </View>
    </SafeAreaView>
  );
};
