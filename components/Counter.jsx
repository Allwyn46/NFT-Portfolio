import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2024";

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
            <div>
                <div className='day_count'>
                    <p>{days}</p>
                    <h3>Days</h3>
                </div>
                <div className='hour_count'>
                    <p>{hours}</p>
                    <h3>Hours</h3>
                </div>
                <div className='minute_count'>
                    <p>{minutes}</p>
                    <h3>Minutes</h3>
                </div>
                <div className='second_count'>
                    <p>{seconds}</p>
                    <h3>Seconds</h3>
                </div>
            </div>
        </div>
    )
}

export default Counter