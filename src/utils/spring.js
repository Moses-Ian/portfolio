import { easings } from 'react-spring';

export const Spring = {
	config: {
		mass: 1,
		// tension: 210,
		tension: 300,
		friction: 30
	},
	from: {opacity: 0, height: 0},
	to: (visible, height) => {
		return {
      opacity: visible ? 1 : 0,
      height: visible ? height : 40
		}
	}
};

export const Fade = {
	config: {
		mass: 0.5,
		tension: 170,
		friction: 26,
		easing: easings.easeInBack
	},
  from: { opacity: 0 },
	to: (visible) => {
		return {
      opacity: visible ? 1 : 0
		}
	},
	leave: { opacity: 0 },
};

