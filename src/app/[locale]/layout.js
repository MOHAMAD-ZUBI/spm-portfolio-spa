import { Inter } from "next/font/google";
import { Almarai } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { NextIntlClientProvider } from "next-intl";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });
const almarai = Almarai({ subsets: ["arabic"], weight: ["400"] }); // Fix: Correct the property name and use an array

export const metadata = {
  title: "Sauber Pro Max - Cleaning Services",
  description:
    "Sauber Pro Max is a cleaning company that cares about the smallest details. We are not the only ones, but we are the best. We clean hotels, homes, offices, buildings, apartments, warehouses, basements, and many other services. We look forward to providing you with the best service.",
};

async function getMessages(locale) {
  try {
    const messages = await import(`../../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}`, error);
    return null;
  }
}

export default async function RootLayout({ children, params }) {
  const { locale = "de" } = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);

  if (!messages) {
    console.log("notFound");
    notFound();
  }

  return (
    <html lang={locale} className=" scroll-smooth">
      <body className={` ${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextUIProvider>
            <Navbar locale={locale} />
            {children}
            <Footer locale={locale} />
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
