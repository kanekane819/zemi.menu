import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANAゼミ | 大学祭メニュー",
  description: "ANAゼミの大学祭メニューをご覧いただけます。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
