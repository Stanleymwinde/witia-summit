import {
  About,
  Agenda,
  Awards,
  Event,
  HomePage,
  IndustryFocus,
  Partners,
  Speakers,
} from "@/components/ui/Home";

export default function Home() {
  return (
    <>
      <HomePage />
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
