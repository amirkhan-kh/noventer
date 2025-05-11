import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BirdBackgroundWrapper from "@/ui/important";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
    <body id="localLayout">
      <NextIntlClientProvider>
        <div className="bird-wrapper">
          <BirdBackgroundWrapper />
        </div>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </body>
  </html>
  );
}
