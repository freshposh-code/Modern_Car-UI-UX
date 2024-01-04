"use client";

import CarCatalogue from '@/Components/CarCatalogue'
import CustomFilter from '@/Components/CustomFilter'
import Hero from '@/Components/Hero'
import SearchBar from '@/Components/SearchBar'
import ShowMore from '@/Components/ShowMore'
import { fuels, yearsOfProduction } from '@/Constants'
import { fetchcars } from '@/Utils'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('')

  // Filter states
  const [fuel, setFuel] = useState<string>('')
  const [year, setYear] = useState<number>(2022)

  // Pagination Staes
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
      setLoading(true)
    try {
      const result = await fetchcars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      });
      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
   getCars()
  }, [fuel, year, limit, model, manufacturer])
  
 

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;



  console.log(allCars)

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar 
          setManufacturer={setManufacturer}
          setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} 
            setFilter={setFuel}
            />
            <CustomFilter title="year" options={yearsOfProduction} 
            setFilter={setYear}/>
          </div>
        </div>

        {!isDataEmpty ?
         <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCatalogue car={car} />
            ))}
          </div>

         {loading && (
          <div className='mt-16 w-full flex-center'>
            <Image src='/logo.svg'
            alt='loader'
            width={50}
            height={50}
            className='object-contain'
            />
          </div>
         )}
          <ShowMore 
          pageNumber={limit / 10}
          isNext={limit > allCars.length}
          setLimit={setLimit}
          />
        </section> 
        :
         <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>
            {allCars?.message}
          </p>
            </div>}
      </div>
    </main>
  )
}
