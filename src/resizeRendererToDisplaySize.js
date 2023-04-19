export const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement
    const width = canvas.clientWidth + 500
    const height = canvas.clientHeight + 500
    const needResize = canvas.width !== width || canvas.height !== height
    
    if(needResize) {
        renderer.setSize(width , height , false)
    }

    return needResize
}