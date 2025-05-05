import React from "react";
import { Card, CardBody, Image, Button } from "@heroui/react";
import heroImg from "@/assets/image/home/hero.png";

/**
 * Hero component usando <Card> como contenedor principal.
 * La <Image> está dentro de la Card y el contenido se superpone en el CardBody.
 */
export default function Hero() {
  return (
    <Card
      fullWidth
      shadow="none"
      radius="lg"
      className="relative overflow-hidden h-[600px] rounded-lg"
    >
      {/* Imagen de fondo con blur y zoom */}
      <Image
      
        removeWrapper
        isBlurred
        isZoomed
        loading="eager"
        alt="Voluntarios con perritos rescatados felices"
        src={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenido superpuesto */}
      <CardBody className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full bg-transparent text-white">
        <h1 className="text-4xl font-bold mb-2 ">
          Da un Hogar, Salva una Vida
        </h1>
        <p className="text-lg mb-6">
          Cada perrito merece amor, cuidados y una familia para siempre. ¡Únete a nuestra misión!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button as="a" href="/adopta" color="primary" size="lg">
            Adopta un Amigo
          </Button>
          <Button as="a" href="/mision" color="primary" variant="light" size="lg">
            Apoya Nuestra Misión
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}