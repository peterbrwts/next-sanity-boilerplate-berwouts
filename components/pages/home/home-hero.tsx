import Image from "next/image";
import Button from "@/components/shared/button";

export default function HomeHero({
  heading,
  paragraph,
  image,
  btnText,
  btnDestination,
}: {
  heading: string;
  paragraph: string;
  image: string;
  btnText: string;
  btnDestination: string;
}) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-[10vw] lg:text-[8vw] font-bold tracking-tight leading-none drop-shadow-lg">
          {heading}
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl font-light max-w-3xl drop-shadow-md">
          {paragraph}
        </p>
        <Button
          href={btnDestination}
          variant="default"
          size="lg"
          className="mt-8"
        >
          {btnText}
        </Button>
      </div>
    </section>
  );
}
