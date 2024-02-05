import Disclaimer from "@/components/Disclaimer";
import Newsletter from "@/components/Newsletter";
import ProjectHeader from "@/components/Header";
import Showcase from "@/components/Showcase";
//import ShowcaseCard from "@/components/ShowcaseCard";

export default function Projects() {
  return (
    <>
      <div>
        <ProjectHeader />
        <h1 className="px-4 pt-10 font-bold text-3xl">Upcoming</h1>
        <Showcase />

        <h1 className="px-4 pt-10 font-bold text-3xl">Past</h1>
        <Showcase />

        <Newsletter />
        <Disclaimer />
      </div>
    </>
  );
}