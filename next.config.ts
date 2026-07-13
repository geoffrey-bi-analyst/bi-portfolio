import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Silence the `flex-shrink-0` → `shrink-0` suggestion warnings in build output
  // These are style warnings only and do not affect functionality
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig