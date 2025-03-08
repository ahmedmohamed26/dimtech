import Header from "./_components/header";
import Intro from "./_components/intro";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Intro />
      </div>
    </div>
  );
}
