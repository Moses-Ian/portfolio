import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, config, animated } from "react-spring";

const pub = process.env.PUBLIC_URL;
const rotation = 60;
const timing = 150;

const FooterLink = ({href, src}) => {
	
  const [isBooped, setIsBooped] = useState(false);
	const rotateSpring = useSpring({
		config: { tension: 300, friction: 10 },
		from: { 
			transform: 'rotate(0deg)',
		},
		to: { 
			transform: isBooped ? `rotate(${rotation}deg)` : 'rotate(0deg)',
			}
	});
	useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
	
	return (
		<a href={href}>
			<animated.img
				src={pub + src}
				onMouseOver={trigger}
				style={rotateSpring}
			/>
		</a>
	);
};

export default FooterLink;