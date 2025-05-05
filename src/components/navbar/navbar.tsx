import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

// SVG renombrado a ASVLogo
export const ASVLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Definimos las rutas principales
  const mainLinks = [
    { name: "Inicio", href: "/" },
    { name: "Adopta", href: "/adopta" },
    { name: "Misión", href: "/mision" },
    { name: "Apoya", href: "/apoya" },
  ];

  // Acciones de usuario
  const userLinks = [
    { name: "Iniciar Sesión", href: "/iniciar-sesion", type: "link" },
    { name: "Registrarse", href: "/registrarse", type: "button" },
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      {/* Logo + Toggle (móvil) */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <ASVLogo />
          <p className="font-bold text-inherit">Adopta Salva Vidas</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Navegación principal (desktop) */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {mainLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link color="foreground" href={link.href}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Acciones de usuario (desktop) */}
      <NavbarContent justify="end">
        {userLinks.map((item) =>
          item.type === "link" ? (
            <NavbarItem key={item.href} className="hidden lg:flex">
              <Link color="foreground" href={item.href}>
                {item.name}
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem key={item.href}>
              <Button as={Link} color="primary" href={item.href} variant="flat">
                {item.name}
              </Button>
            </NavbarItem>
          )
        )}
      </NavbarContent>

      {/* Menú móvil */}
      <NavbarMenu>
        {mainLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link
              className="w-full"
              color="foreground"
              href={link.href}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <hr className="my-2 border-t border-muted-foreground" />
        {userLinks.map((item) => (
          <NavbarMenuItem key={item.href}>
            {item.type === "link" ? (
              <Link
                className="w-full"
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            ) : (
              <Button
                as={Link}
                className="w-full"
                color="primary"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Button>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
