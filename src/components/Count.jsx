import CountCard from './CountCard';

const Count = () => {
  return (
    <div className='w-full md:w-[85%] my-8 md:mt-16 flex justify-between xs:justify-around lg:justify-between'>
      <CountCard end={199} text='Team Members' />
      <CountCard end={1896} text='Services Done' />
      <CountCard end={1776} text='5-star Ratings' />
    </div>
  )
}

export default Count
