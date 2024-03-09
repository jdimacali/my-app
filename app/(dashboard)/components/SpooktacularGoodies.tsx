import Title from "./Title";
import DashboardImages from "./DashboardImages";
import DashboardGhost from "./DashboardGhost";
import Image from "next/image";
import clsx from "clsx";
import { Dashboard } from "@/types";

interface SpooktacularGoodiesProps {
  dashboard: Dashboard;
}

const SpooktacularGoodies = ({ dashboard }: SpooktacularGoodiesProps) => {
  return (
    <section
      className={clsx(
        `w-full  bg-violet-950  
      max-md:pt-20 gap-x-20 relative bg-gradient-to-br from-violet-900/40 from-15% to-violet-950 to-15% h-full `
      )}
    >
      <DashboardGhost />
      <Image
        src="/assets/web.png"
        width={900}
        height={900}
        className="absolute top-0 -left-3"
        priority
        alt="web"
      />
      <>
        <div className=" flex max-md:flex-col justify-center text-center items-center lg:py-[8rem] pt-4 gap-x-20">
          <Title
            title={dashboard?.Title}
            subtitle={dashboard?.Subtitle}
            button={dashboard?.Button}
          />
          <DashboardImages images={dashboard.Images} />
        </div>
      </>
    </section>
  );
};

export default SpooktacularGoodies;
