import React, { useEffect, useRef } from 'react';

const BackgroundAudio = ({ play }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (play) {
            audio.volume = 0.07;
            audio.loop = true;
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.pause();
        };
    }, [play]);

    return (
        <audio ref={audioRef}>
            <source src="/rain.wav" type="audio/wav" />
        </audio>
    );
};

export default BackgroundAudio;
