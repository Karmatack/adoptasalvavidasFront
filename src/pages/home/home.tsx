import HeroImage from "@/components/home/hero";
// más imports de secciones futuras, p.ej.:
import AdoptableFriends from "@/components/home/adoptable-friends";
// import MissionAndPlans    from "./mission-and-plans";
// import OneTimeDonation    from "./one-time-donation";
// import SuccessStories     from "./success-stories";
// import FinalCta           from "./final-cta";
import LunaImg from "@/assets/image/home/momentaneoPerritos/1.png";
import MaxImg from "@/assets/image/home/momentaneoPerritos/2.png";

const dogsData = [
  {
    id: "1",
    name: "Luna",
    description: "Cariñosa y juguetona",
    image: LunaImg,
    featured: true,
  },
  {
    id: "2",
    name: "Max",
    description: "Activo y leal",
    image: MaxImg,
  },
  {
    id: "3",
    name: "Bella",
    description: "Amigable y calmada",
    image: LunaImg,
    featured: true,
  },
  // …más perritos según necesites
];

export default function home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Sección Hero */}
      <HeroImage />

      {/* Sección Adoptable Friends */}
      <AdoptableFriends dogs={dogsData} />

      {/* Sección Misión & Planes de Apoyo */}
      {/* <MissionAndPlans /> */}

      {/* Sección Donación Única */}
      {/* <OneTimeDonation /> */}

      {/* Sección Historias de Éxito */}
      {/* <SuccessStories /> */}

      {/* Sección CTA Final */}
      {/* <FinalCta /> */}
    </main>
  );
}
