import AppBarDashboard from "@/components/component/app-bar-dashboard";
import { Providers } from "./../providers";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBarDashboard />
          {children}
        </Providers>
      </body>
    </html>
  );
}