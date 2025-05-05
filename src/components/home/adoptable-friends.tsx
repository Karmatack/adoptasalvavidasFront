// src/components/home/adoptable-friends.tsx
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Badge,
  Button,
} from "@heroui/react";

type Dog = {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
};

interface AdoptableFriendsProps {
  dogs: Dog[];
}

export default function AdoptableFriends({ dogs }: AdoptableFriendsProps) {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Nuestros Amiguitos en Adopción
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dogs.map((dog) => (
          <Card
            key={dog.id}
            shadow="sm"
            radius="lg"
            isFooterBlurred
            className="flex flex-col border-none overflow-hidden"
          >
            <CardHeader className="relative h-48 p-0">
              <Image
                alt={dog.name}
                src={dog.image}
                isZoomed
                removeWrapper
                className="absolute inset-0 w-full h-full object-cover"
              />
              {dog.featured && (
                <Badge color="primary" className="absolute top-3 left-3">
                  Destacado
                </Badge>
              )}
            </CardHeader>

            <CardBody className="flex-1 px-4 py-2 space-y-1">
              <h3 className="text-lg font-semibold">{dog.name}</h3>
              <p className="text-sm text-default-500 truncate">
                {dog.description}
              </p>
            </CardBody>

            <CardFooter className="justify-center py-2 px-4 before:bg-white/20 backdrop-blur-md">
              <Button
                as="a"
                href={`/adopta/${dog.id}`}
                color="primary"
                radius="lg"
                size="md"
                className="w-full"
              >
                Ver Detalles
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
