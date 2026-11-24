import Navigation from "./components/Navigation";
import { useIntersectionObserver, useScrollToTop } from "@/hooks/";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();
  return (
    <main className="min-h-screen bg-white text-black">
      <Navigation />
    </main>
  );
};

export default App;
