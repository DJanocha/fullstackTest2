// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  console.log({ publishableKey });
  if (!publishableKey) {
    const envKeys = Object.keys(process.env);
    console.warn("could not find publishableKey!", { envKeys });
    return null;
  }
  return (
    <ClerkProvider publishableKey={publishableKey} {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
