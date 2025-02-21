"use client";

import { ThemeProvider } from "next-themes";
import { WagmiConfig, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { createPublicClient, http } from "viem";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
  connectors: [
    new MetaMaskConnector({
      chains: [mainnet, sepolia]
    })
  ]
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
      >
        {children}
      </ThemeProvider>
    </WagmiConfig>
  );
}