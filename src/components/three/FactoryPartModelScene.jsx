import { Suspense, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Selection, Outline, Select } from '@react-three/postprocessing'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

import { clickModelPostion } from '../../store'

import FactoryPartCameraControl from './FactoryPartCameraControl'

const FactoryPartModelScene = () => {
  const groupRef = useRef()
  const [hovered, setHover] = useState()

  const { nodes } = useGLTF('./models/Factory_2.glb')
  
  const { modelPartName, setPosition, setLerping, setModelPartName, setCameraMove } = clickModelPostion((state) => state)

  const nav = useNavigate()

  const pointOnEventHandler = (e) => {
    setHover(e.object.name)
    setCameraMove(false)
  }

  const pointOutEventHandler = (e) => {
    setHover(false)
  };  

  const onClickEventHandler = (e) => {
    nav('/dashboard')
    setPosition(e.object.position)
    setLerping(true)
    setModelPartName(e.object.name)
    setCameraMove(true)
  }

  return (
    <>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <Suspense>
          <directionalLight />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="red" edgeStrength={10000} width={1000} />
            </EffectComposer>
            <group ref={groupRef} dispose={null}>
              <primitive object={nodes.Scene} />
              {['BlueBox', 'GreenBox', 'RedBox'].map((modelName) => (
                <Select key={modelName} name={modelName} enabled={hovered === modelName || modelPartName === modelName}>
                  <mesh
                    onPointerOver={pointOnEventHandler}
                    onPointerOut={pointOutEventHandler}
                    onClick={onClickEventHandler}
                  >
                    <primitive object={nodes[modelName]} />
                  </mesh>
                </Select>
              ))}
            </group>
          </Selection>

        </Suspense>
        {/* <axesHelper args={[200]} /> */}

        <FactoryPartCameraControl/>
        </Canvas>
    </>
  )
}

export default FactoryPartModelScene
