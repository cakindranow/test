/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "images.pexels.com" } , {hostname : "localhost"}],
      },
}
export default nextConfig;
