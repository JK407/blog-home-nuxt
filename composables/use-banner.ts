import { useState } from "#app";
/* ！！！ 这里声明的变量都是响应式的 */
let banners: BannerState[] = [];
// useState 的第一参数为 key，第二参数为初始化的工厂函数
export const useBanners = () => useState("banners", () => banners);

export default function () {
  return useState("banners", () => []);
}
