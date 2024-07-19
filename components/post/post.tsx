import Content from './content';
import Footer from './footer';
import Header from './header';

export default function Post() {
  return (
    <div className="flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:bg-black/5 p-4 rounded-2xl">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
