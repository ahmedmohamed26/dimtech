import dynamic from "next/dynamic";
const Community = dynamic(() => import("./_components/community"));
const History = dynamic(() => import("./_components/history"));
const Intro = dynamic(() => import("./_components/intro"));
const Executive = dynamic(() => import("./_components/executive"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Intro />
      <span className="flex items-center">
        <span className="h-2 flex-1 bg-black"></span>
      </span>

      <div className="container" id="history">
        <History />
      </div>
      <span className="flex items-center">
        <span className="h-2 flex-1 bg-black"></span>
      </span>
      <div id="community">
        <Community />
      </div>
      <span className="flex items-center">
        <span className="h-2 flex-1 bg-black"></span>
      </span>
      <div id="executive">
        <Executive />
      </div>
    </div>
  );
}
