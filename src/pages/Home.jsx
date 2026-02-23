import MainLayout from '../layouts/MainLayout';
import AllCryptos from "../components/AllCryptos";

export default function Home() {

  return (
    <MainLayout>
        <div className='home'>

          <section className='all-coins'>
            <AllCryptos/>
          </section>

          <section className='trending'>
            <h2>Trending cryptos:</h2>
          </section>

        </div>
    </MainLayout>
  )
}
