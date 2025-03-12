import React from 'react'
import Button from './Button';
import { statistics } from '../constants';
import { arrowRight } from '../assets/icons';
function Hero() {
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='realtive xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our summer collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'><span className='xl:bg-white xl:whitespace-nowrap realtive z-10 pr-10'>The new Arrival</span>
        <br />
        <span className='text-coral-red inline-block mt-3'>Nike</span>  Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish nike arrival, quality, comfort and innovation for comfortable life.
        </p>
        <Button label="shop now" iconUrl={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((item)=>(
            <div key={item.label}>
              <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
              <p className='font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero