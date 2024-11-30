/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      outputFileTracingIncludes: {
        '/actions/get_example_files_list': ['./public/src/audio_files/*'],
      },
    },
  };

export default nextConfig;
