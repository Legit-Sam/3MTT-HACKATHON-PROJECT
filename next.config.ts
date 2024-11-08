import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
    WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID
  }
};

export default nextConfig;
