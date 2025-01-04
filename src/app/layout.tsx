import "./globals.scss";
import Image from "next/image";

export const metadata = {
  title: "Spiderverse",
  description: "Criando um paralax carrossel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Opções de Menu"
            width={36}
            height={25}
          />
          <Image
            src="/spider-logo.svg"
            alt="Spiderman"
            width={260}
            height={70}
          />
          <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
        </header>
        {children}
      </body>
    </html>
  );
}
