import withBundleAnalyzer from '@next/bundle-analyzer'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Next 16 writes AGENTS.md and CLAUDE.md into the project root on `next dev`.
  // This is a workshop repo, so attendees should not find two unexplained files
  // in their clone.
  agentRules: false,
  images: {
    // `images.domains` was deprecated in Next 16 in favour of `remotePatterns`.
    remotePatterns: [{ protocol: 'https', hostname: 'image.tmdb.org' }]
  }
}

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  nextConfig
)
