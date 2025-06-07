import React, { useEffect, useMemo, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Robot(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/animated_robot_sdc.glb')

  // Clone the scene to preserve skeleton animation
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // Safely play and clean up animations
  useEffect(() => {
    // Play all available actions
    Object.values(actions || {}).forEach((action) => {
      if (action && typeof action.reset === 'function' && typeof action.fadeIn === 'function') {
        action.reset().fadeIn(0.5).play()
      }
    })

    // Cleanup
    return () => {
      Object.values(actions || {}).forEach((action) => {
        if (action && typeof action.fadeOut === 'function' && typeof action.stop === 'function') {
          action.fadeOut(0.5).stop()
        }
      })
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_82" rotation={[0, 1.561, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Doigts_81" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Rubber}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/animated_robot_sdc.glb')
