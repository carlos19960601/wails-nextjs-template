import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "dist",
  /*
   *  默认模式：node_modules 不会打包到输出目录，需要手动运行 npm install
   *  export: 仅输出静态资源，不支持SSR，API 路由，项目完全依赖客户端逻辑。不需要nodejs运行时
   *  standalone: 所有依赖项和项目代码合并到 输出目录，支持SSR, API 路由, 但需要nodejs运行时。适合 Serverless 函数、Docker 容器等场景。
   */
  output: "export"
};

export default nextConfig;
