import React, { useEffect, useState } from 'react'

const Counter = ({ deadline }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='timer'>
            <div className='timer_wrapper'>
                <p className='text-slate-400'>Ending in</p>
                <div className='counter_wrapper flex flex-row justify-between items-center gap-1'>
                    <h3>{days}</h3>
                    <p>:</p>
                    <h3>{hours}</h3>
                    <p>:</p>
                    <h3>{minutes}</h3>
                    <p>:</p>
                    <h3>{seconds}</h3>
                </div>
            </div>
        </div>
    )
}

export default Counter