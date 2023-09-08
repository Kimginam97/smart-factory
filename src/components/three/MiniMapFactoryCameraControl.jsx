import { useRef, useEffect } from 'react'
import { CameraControls } from '@react-three/drei'

const MiniMapFactoryCameraControl = () => {
  const factoryCameraControlsRef = useRef()

  useEffect(() => {
    if (factoryCameraControlsRef.current) {
      factoryCameraControlsRef.current.setLookAt(160, 120, -75, 80, 0, -75)

      // Disable right mouse button interaction
      factoryCameraControlsRef.current.enabled = false

      // Update controls
      factoryCameraControlsRef.current.update()
    }
  })

  return (
    <>
      <CameraControls
        ref={factoryCameraControlsRef}
      />
    </>
  )
}

export default MiniMapFactoryCameraControl
