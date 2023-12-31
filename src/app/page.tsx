import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-800">
      <MaxWidthWrapper>
        <div className="mx-auto pt-36 pb-20 md:pb-24 text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-100 ">
            Your marketplace for high-fabric{" "}
            <span className="text-blue-500 underline italic">Digital Assets</span>
            <span>.</span>
          </h1>
          <p className="mt-8 md:mt-6 text-base md:text-lg max-w-prose text-muted-foreground leading-tight md:leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            dignissimos beatae, quod sed commodi quas! Expedita et minus magnam
            asperiores!
          </p>
          <div className="flex flex-col md:flex-row mt-6 gap-4">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="outline">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO : List Products */}
      </MaxWidthWrapper>
      <section className="b ">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 sm:gap-y-12 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-300 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-blue-400">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
