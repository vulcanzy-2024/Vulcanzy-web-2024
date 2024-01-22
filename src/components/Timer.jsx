import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const countdown = () => {
      const countDate = new Date('Feb 2, 2024 0:0:0').getTime();
      const now = new Date().getTime();
      var gap = countDate - now;
      if (gap < 0) {
        gap = 0;
      }
      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);
      document.querySelector('.day').innerText = days;
      document.querySelector('.hour').innerText = hours;
      document.querySelector('.minute').innerText = minutes;
      document.querySelector('.second').innerText = seconds;
    };
    const time = setInterval(countdown, 1000);
    return () => {
      clearInterval(time);
    };
  });
  return (
    <section className="w-full text-[0.8rem] sm:text-3xl lg:text-5xl">
      <div className="flex flex-wrap gap-y-8 text-orange-600 font-bold text-center justify-center md:justify-between">
        <div className="sm:px-6 px-4">
          <h3 className="day">--</h3>
          <label className="lg:text-[1.25rem] sm:text-[1rem]">Days</label>
        </div>
        <div className="sm:px-6 px-4">
          <h3 className="hour">--</h3>
          <label className="sm:text-[1rem] lg:text-[1.25rem]">Hours</label>
        </div>
        <div className="sm:px-6 px-4">
          <h3 className="minute">--</h3>
          <label className="sm:text-[1rem] lg:text-[1.25rem]">Minutes</label>
        </div>
        <div className="sm:px-6 px-4">
          <h3 className="second">--</h3>
          <label className="sm:text-[1rem] lg:text-[1.25rem]">Seconds</label>
        </div>
      </div>
    </section>
  );
}
export default Timer;