import {SUN, MERCURY, VENUS, MARS, EARTH, JUPITER, SATURN, URANUS, NEPTUN} from "./constants/planetsConstants"

export const orbitSpeedCalculator = (index) => {
    switch (index) {
        case SUN:
            return 1
        case MERCURY:
            return 41
        case VENUS:
            return 57
        case EARTH:
            return 67
        case MARS:
            return 83
        case JUPITER:
            return 153
        case SATURN:
            return 205
        case URANUS:
            return 293
        case NEPTUN:
            return 369
    }
}
