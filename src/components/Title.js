import React from 'react';
import { useSpring, config, animated } from "react-spring";

// const height = 500;

const Title = ({title, visible}) => {
	
  const slideInStyles = useSpring({
    config: { ...config.slow },
    from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
    to: {
      opacity: visible ? 1 : 0,
      transform: "translate3d(0px, 0px, 0px)"
    }
  });

	return (
		<animated.div className="title" style={slideInStyles}>
			<h2>{title}</h2>
		</animated.div>
	)
};

export default Title;