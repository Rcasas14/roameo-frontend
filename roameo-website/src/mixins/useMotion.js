export const useMotion = {
    methods: {
        getSlideUpMotion(delay = 0, distance = 160){
            return {
                initial: {
                    y: distance,
                    opacity: 0
                },
                enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 25,
                        mass: 0.5,
                        delay: delay
                    }
                }
            }
        },

        getScrollFadeInMotion(delay = 0, mass = 1){
            return {
                initial: { opacity: 0 },
                visibleOnce: {
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 28,
                    mass: mass,
                    delay: delay
                  },
                }
              }
        },

        getScrollSlideUpMotion(delay = 0, distance = 160, mass = 0.5){
            return {
                initial: {
                    y: distance,
                    opacity: 0,
                },
                visibleOnce: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 25,
                        mass: mass,
                        delay: delay
                    }
                }
            }
        },
        getScrollSlideUpMotionBounce(delay = 0, distance = 160){
            return {
                initial: {
                    y: distance,
                    opacity: 0,
                },
                visibleOnce: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 28,
                        mass: 1,
                        delay: delay
                    }
                }
            }
        }
    }
}
