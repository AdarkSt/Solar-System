import * as THREE from "three"
import { Planets } from "./Planets.js"
import { checkTexture } from "../utils/errors/checkTexture.js"
import GUI from 'lil-gui';
   
export class BasicPlanet extends Planets {
    constructor(radius, witdhSegment, heightSegment) {
        super(radius, witdhSegment, heightSegment)
    }

    static defaultParams = {
        scaleCoeficientXYZ: 1,
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        roughness: 0,
        metalness: 0
    }

    createModel = (texture, options) => {

        const {
            scaleCoeficientXYZ,
            positionX = 0,
            positionY = 0,
            positionZ = 0,
            roughness = 0,
            metalness = 0,
        } = options
 
        const planetGeometry = new THREE.SphereGeometry(this.radius, this.witdhSegment, this.heightSegment)
        const planetMaterial = new THREE.MeshStandardMaterial({map:texture, roughness: roughness, metalness: metalness})
        const planet = new THREE.Mesh(planetGeometry, planetMaterial)
    
        planet.scale.set(scaleCoeficientXYZ, scaleCoeficientXYZ, scaleCoeficientXYZ)
        planet.position.setX(positionX)
        planet.position.setY(positionY)
        planet.position.setZ(positionZ)
    
        return planet 
    }

    static takeValidParams(configObject) {
        const {texture, parameters = this.defaultParams} = configObject

        checkTexture(texture)

        const validParameters = {
            scaleCoeficientXYZ: parameters.scaleCoeficientXYZ || 1,
            positionX: parameters.positionX || 0,
            positionY: parameters.positionY || 0,
            positionZ: parameters.positionZ || 0,
            roughness: parameters.roughness || 0,
            metalness: parameters.metalness || 0,
        }

        return [texture, validParameters]
    }
}