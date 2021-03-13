import React from 'react'
import FlipCountdown from '@rumess/react-flip-countdown';

export default function Hero() {
  return (
    <>
      <h1 className='font-hero text-6xl'>Nicki and Rueben</h1>
      <FlipCountdown
        titlePosition='bottom'
        yearTitle='Year'
        monthTitle='Months'
        dayTitle='Days'
        hourTitle='Hours'
        minuteTitle='Minutes'
        secondTitle='Seconds'
        endAt={'2022-10-14 18:00:00'} />
    </>
  )
}
