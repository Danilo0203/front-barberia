import poppins from "@/fonts/fonts";
import { getBackground } from "@/lib/api/strapi/background/background";

export default async function TurnoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { NEXT_PUBLIC_STRAPI_HOST } = process.env;
  const turno = await getBackground();
  return (
    <main
      className={`${poppins.className} antialiased bg-center bg-cover bg-no-repeat min-h-dvh`}
      style={{
        backgroundImage: `url(${NEXT_PUBLIC_STRAPI_HOST}/${turno.fondo_pantalla?.url})`,
      }}
    >
      {children}
    </main>
  );
}
