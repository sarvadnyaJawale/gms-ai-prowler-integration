import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import React from "react";

import { SidebarWrap, Toaster } from "@/components/ui";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Providers } from "../providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark:bg-prowler-theme-midnight",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex h-dvh items-center justify-center overflow-hidden">
            <SidebarWrap />
            <main className="no-scrollbar container mb-auto h-full flex-1 flex-col overflow-y-auto p-4">
              {children}
              <Toaster />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
