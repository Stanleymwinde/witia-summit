import {
  About,
  Agenda,
  Awards,
  Event,
  HeroBanner,
  IndustryFocus,
  Partners,
  Speakers,
} from "@/components/ui/Home";

export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      {<HeroBanner />}
      <About />
      <Event />
      <IndustryFocus />
      <Agenda />
      <Speakers />
      <Awards />
      <Partners />
    </>
  );
}
