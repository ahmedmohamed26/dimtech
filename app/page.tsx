import dynamic from "next/dynamic";
const Community = dynamic(() => import("./_components/community"));
const Header = dynamic(() => import("./_components/header"));
const History = dynamic(() => import("./_components/history"));
const Intro = dynamic(() => import("./_components/intro"));
const Executive = dynamic(() => import("./_components/executive"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Intro />
        <div id="history">
          <History />
        </div>
        <div id="community">
          <Community />
        </div>
        <div id="executive">
          <Executive />
        </div>
      </div>
    </div>
  );
}
