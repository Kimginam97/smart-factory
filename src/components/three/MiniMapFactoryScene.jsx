import { Suspense,useRef, useState } from 'react'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { EffectComposer, Selection, Outline, Select } from '@react-three/postprocessing'
import { useNavigate } from 'react-router-dom'

import Light from './Light'

import MiniMapFactoryCameraControl from './MiniMapFactoryCameraControl'
import { clickModelPostion } from '../../store'

const MiniMapFactoryScene = () => {
  const groupRef = useRef()
  const { modelPartName, setModelPartName, setPosition, setLerping, setCameraMove } = clickModelPostion((state) => state)
  const { nodes } = useGLTF('./models/Factory_1.glb')
  const [hovered, setHover] = useState()
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
          <Light />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="red" edgeStrength={10000} width={1000} />
            </EffectComposer>

            <group ref={groupRef} dispose={null}>
              <primitive object={nodes.Scene} />
              {['BlueBox', 'GreenBox', 'RedBox'].map((modelName) => (
                <Select key={modelName} name={modelName} enabled={hovered === modelName || modelPartName === modelName}>
                  <mesh
                    name={modelName}
                    onClick={onClickEventHandler}
                    onPointerOver={pointOnEventHandler}
                    onPointerOut={pointOutEventHandler}
                  >
                    <primitive object={nodes[modelName]} />
                  </mesh>
                </Select>
              ))}
            </group>
          </Selection>
        </Suspense>

        {/* Helper */}
        {/* <Perf position="bottom-left" /> */}

        {/* <axesHelper args={[100]} /> */}

        <MiniMapFactoryCameraControl />
      </Canvas>
    </>
  )
}

export default MiniMapFactoryScene
