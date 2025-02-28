"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAccount, useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

export function HeroSection() {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector()
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="font-orbitron text-5xl md:text-7xl font-bold mb-6 neon-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          repChain
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-cyber-teal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The Next Generation Web3 Reputation System
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4 items-center"
        >
          <Link
            href="/mint"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-teal to-electric-purple text-white font-semibold hover:shadow-neon-teal transition-shadow duration-300"
          >
            Get Started
          </Link>
          <button
            onClick={() => connect()}
            className="px-8 py-3 rounded-lg bg-black/30 border border-cyber-teal text-white font-semibold hover:shadow-neon-teal transition-shadow duration-300"
          >
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}