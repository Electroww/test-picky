import Content from './content';
import Header from './header';

export default function Post() {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      <Content />
    </div>
  );
}
