import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const socials = [
  { label: "Upcoming Events", link: "", icon: "" },
  { label: "G.W.E New Item Shop Drop", link: "", icon: "" },
  { label: "Tee Public", link: "", icon: "" },
  { label: "Etsy Shop", link: "", icon: "" },
  { label: "Instagram", link: "", icon: "" },
  { label: "Facebook", link: "", icon: "" },
  { label: "Tik Tok", link: "", icon: "" },
];

const page = () => {
  return (
    <section className="h-[60rem] w-full bg-gray-900 flex flex-col items-center">
      <div className="bg-[url('../public/background/bg3.jpg')] w-full h-full bg-cover bg-clip-padding bg-fixed bg-blend-overlay bg-gray-950  bg-opacity-40">
        <div className="flex flex-col justify-center items-center w-full">
          <Avatar className="mt-10 h-[65px] w-[65px]">
            <AvatarImage src="./icon/gweart.jpg" />
            <AvatarFallback className="text-white"> Gwe </AvatarFallback>
          </Avatar>
          <h1 className="text-white font-semibold text-3xl">GweArt</h1>
        </div>
        <div className="flex flex-col items-center text-center justify-center text-black gap-y-10 mt-8">
          {socials.map((social) => (
            <div
              key={social.label}
              className="rounded-full bg-white w-[30rem] font-semibold border-[3px] p-4 hover:animate-bounce hover:opacity-95 transition-all"
            >
              <Link href={social.link}>
                <h1 className="text-md">{social.label}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default page;