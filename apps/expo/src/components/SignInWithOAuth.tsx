import { useOAuth, UseOAuthFlowParams } from "@clerk/clerk-expo";
import React from "react";
import { Button, View } from "react-native";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

interface ISignInWithOAuthProps extends UseOAuthFlowParams {
  buttonLabel: string;
}

const SignInWithOAuth = ({ strategy, buttonLabel }: ISignInWithOAuthProps) => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({
    strategy,
  });

  const handleSignIn = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Modify this code to use signIn or signUp to set this missing requirements you set in your dashboard.
        throw new Error(
          "There are unmet requirements, modifiy this else to handle them",
        );
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      console.log("error signing in with google", err);
    }
  }, []);

  return (
    <View className="my-4 rounded-lg border-2 border-gray-500 p-4 ">
      <Button title={buttonLabel} onPress={handleSignIn} />
    </View>
  );
};

export default SignInWithOAuth;
