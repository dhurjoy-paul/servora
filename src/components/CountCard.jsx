import CountUp from 'react-countup'

const CountCard = ({ end, text }) => {
  return (
    <div>
      <CountUp  start={0} end={end} delay={0} suffix=" +">
        {({ countUpRef }) => (<div><span className='text-2xl md:text-3xl font-semibold' ref={countUpRef} /></div>)}
      </CountUp>
      <p>{text}</p>
    </div>
  )
}

export default CountCard
