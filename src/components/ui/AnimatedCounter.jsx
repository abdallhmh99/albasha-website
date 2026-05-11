import React from 'react';
import CountUpPkg from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUp = CountUpPkg.default ? CountUpPkg.default : CountUpPkg;

export default function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2.5, className }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <span ref={ref} className={className}>
            {inView ? (
                <CountUp 
                    start={0} 
                    end={end} 
                    duration={duration} 
                    separator="," 
                    prefix={prefix} 
                    suffix={suffix} 
                />
            ) : (
                <span>{prefix}0{suffix}</span>
            )}
        </span>
    );
}
