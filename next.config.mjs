/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      outputFileTracingIncludes: {
        '/detect': ['./public/src/audio_files/*'],
      },
    },
  };

export default nextConfig;
