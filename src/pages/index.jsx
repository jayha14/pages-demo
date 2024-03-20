import Banner from '../assets/images/329056673_1361124768017856_3262390887522477592_n.jpg';
import MainHome from './main-home';
function Home() {
  return (
    <div>
      <img src={Banner} alt="Banner" className=" w-[100vw] h-[82vh] object-fit" />
      <MainHome />
    </div>
  );
}

export default Home;
