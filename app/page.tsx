import Community from "./_components/community";
import Executive from "./_components/executive";
import Header from "./_components/header";
import History from "./_components/history";
import Intro from "./_components/intro";

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
