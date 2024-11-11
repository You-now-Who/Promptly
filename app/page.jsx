import Feed from "./components/Feed";


export default function Home() {
  return (
    <>
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      A platform for discovering and sharing AI-powered prompts for creative writing.
    </p>
    <Feed />
    </section>
    </>
  );
}
