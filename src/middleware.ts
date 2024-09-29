import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "bn", "pt"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(fr|en|bn|pt)/:path*"],
};
