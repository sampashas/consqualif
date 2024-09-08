module.exports = {
  images: {
    domains: ["mdh-sepia.vercel.app"],
  },
  experimental: { esmExternals: "loose" },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
    });

    return config;
  },
};
