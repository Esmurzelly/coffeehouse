import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const MapSection = () => {
  return (
    <section className='w-full text-center py-10 px-10 flex flex-col justify-center items-center border-b-2 border-b-gray-300'>
      <h1 className='text-base font-semibold lg:text-2xl'>We are on the map</h1>

      <div className='z-20 mt-7 w-5/6'>
        <YMaps>
          <Map className='w-full h-[276px]' defaultState={{ center: [59.962233, 30.303750], zoom: 15 }}>
          <Placemark geometry={[59.962233, 30.303750]} />
          </Map>
        </YMaps>
      </div>
    </section>
  )
}

export default MapSection