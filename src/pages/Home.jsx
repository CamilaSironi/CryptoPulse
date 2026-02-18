import MainLayout from '../layouts/MainLayout';
import useFetchCrypto from '../hooks/useFetchCrypto';

export default function Home() {

  let {getAll, getTrending} = useFetchCrypto();

  return (
    <MainLayout>
        <div className='home'>

          <section className='all-coins'>
            <h2>All coins</h2>

          </section>

          <section className='trending'>
            <h2>Trending cryptos:</h2>
          </section>

        </div>
    </MainLayout>
  )
}
