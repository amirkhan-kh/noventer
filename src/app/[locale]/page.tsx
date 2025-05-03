import { About, Intro, Partners, Projects, Service } from "@/components";
export default function HomePage() {
  return (
    <div className="">
      <Intro/>
      <About/>
      <Projects/>
      <Service/>
      <Partners/>
    </div>
  );
}
