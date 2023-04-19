import * as THREE from "three"
import { checkTexture } from "../utils/errors/checkTexture.js";
import { Luminaries } from "./Luminaries.js";

export class Sun extends Luminaries {
    constructor(radius, witdhSegment, heightSegment) {
        super(radius, witdhSegment, heightSegment)
    }

    static defaultParams = {
        scaleCoeficientXYZ: 1,
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        sunLightPositionX: 0,
        sunLightPositionY: 0,
        sunLighrPositionZ: 0,
        sunLightIntensity: 1.7
    }

    createModel = (texture, options) => {

        const {
            scaleCoeficientXYZ,
            positionX = 0,
            positionY = 0,
            positionZ = 0,
            sunLightPositionX = 0,
            sunLightPositionY = 0,
            sunLighrPositionZ = 0,
            sunLightIntensity = 1.7
        } = options

        const sunLight = new THREE.PointLight(0xFFFFFF)
        sunLight.position.set(sunLightPositionX, sunLightPositionY, sunLighrPositionZ)
        sunLight.intensity = sunLightIntensity

        const sunGeometry = new THREE.SphereGeometry(this.radius, this.witdhSegment, this.heightSegment)
        const sunMaterial = new THREE.MeshBasicMaterial({map: texture})
        const sunModel = new THREE.Mesh(sunGeometry, sunMaterial)
        const sun = new THREE.Object3D()
        sun.add(sunModel)
        sun.add(sunLight)

        sun.scale.set(scaleCoeficientXYZ, scaleCoeficientXYZ ,scaleCoeficientXYZ)
        sun.position.setX(positionX)
        sun.position.setY(positionY)
        sun.position.setZ(positionZ)

        return sun
    
    }

    static takeValidParams(configObject = {}) {
        const {texture, parameters = this.defaultParams} = configObject

        checkTexture(texture)

        const validParameters = {
            scaleCoeficientXYZ: parameters.scaleCoeficientXYZ || 1,
            positionX: parameters.positionX || 0,
            positionY: parameters.positionY || 0,
            positionZ: parameters.positionZ || 0,
            sunLightPositionX: parameters.sunLightPositionX || 0,
            sunLighrPositionY: parameters.sunLightPositionY || 0,
            sunLighrPositionZ: parameters.sunLighrPositionZ || 0,
            sunLightIntensity: parameters.sunLightIntensity || 1.7
        }

        return [texture, validParameters]
    }
}