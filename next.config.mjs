/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "public.blob.vercel-storage.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "abs.twimg.com",
      },
      {
        hostname: "pbs.twimg.com",
      },
      {
        hostname: "flag.vercel.app",
      },
      {
        hostname: "illustrations.popsy.co",
      },
      {
        hostname: "mundo-tours.s3.eu-central-1.amazonaws.com",
      },
      {
        hostname: "tailwindui.com",
      },
      {
        hostname: "placehold.co",
      },
      {
        hostname: "flagcdn.com",
      },

      {
        hostname: "skkyjvdnikftxykbddoi.supabase.co",
      },
      {
        hostname: "cdlxkuzvjlyvwgzgcdro.supabase.co",
      },
    ],
  },
};

export default nextConfig;
