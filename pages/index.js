import Image from 'next/image';
import Header from '../components/Header';
const img =
  'https://s3-alpha-sig.figma.com/img/a546/3d79/9951b01521201a6cdc3a04c69b5d5a67?Expires=1676851200&Signature=DCeZOl2bLkHEUvwra1NJB-MiQjfbPaT9lBhiQual2falmX0bVvMW78cFDgPcs~BVe6eIczKlzGY1p88Ylos-vXnd5XdWH7Dw4eGuQDzHOlMGUvCiXp-A3pBEasx6xEeGueAinEgRVr8MIFe5sM3I5GgNMcDra1zCfFQ~2qAT8uFrDJ9isw-46TOHvUOcZ93z-yIvXdBOq5M-DdE41MPJcGCJio2UW4ulhFRAqhLRsi9skOvqcVXsV2Gy1Uz7RQ1CQIPexWPMUt3IIswYb8cJaGhRoGSb-PYMR0Mr5qHWQI256cg07VlC58KOfCzCSq9FFdy3d13dQ2Lm4Zf5q6giIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

function Home() {
  return (
    <section className="container">
      <section className="relative">
        <section className="absolute z-10 w-full px-10 py-5">
          <Header />
        </section>
      </section>
      <section className="relative">
        <Image
          src={img}
          width={1024}
          height={560}
          className="w-full h-screen "
        />
        <div className="absolute top-1/3 flex flex-col w-full justify-center items-center">
          <h1 className="text-white">Explore the world with a smile</h1>
          <h1>Hello</h1>
        </div>
      </section>
    </section>
  );
}

export default Home;
