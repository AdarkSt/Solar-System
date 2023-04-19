import * as THREE from "three"
import { INVALID_TEXTURE, REQUIRED_TEXTURE } from "../constants/errorTexts.js"

export const checkTexture = (texture) => {
    if (!texture) {
        throw new Error(REQUIRED_TEXTURE)
    }
    if (!(texture instanceof THREE.Texture)) {
        throw new Error(INVALID_TEXTURE)
    }
}