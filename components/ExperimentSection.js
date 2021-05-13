import React, { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function ExperimentSection() {
  const ref = useRef();
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0.8, 0.9, 1], [1, 1, 0.5]);

  // rotate image 1 and 3
  const zRotAnim13 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, -0, -4]);

  // rotate image 2
  const zRotAnim2 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, -0, 4]);

  // rotate image $
  const zRotAnim4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, -0, 3]);

  // rotate image 5
  const zRotAnim5 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, -0, -8]);

  // image 1
  const yPosAnim1 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vh', '0vh', '-40vh']
  );

  // image 2
  const xPosAnim2 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vh', '0vh', '40vw']
  );

  // image 3
  const xPosAnim3 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vw', '0vw', '-40vw']
  );
  const yPosAnim3 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vh', '0vh', '-10vh']
  );

  // image 4
  const xPosAnim4 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vw', '0vw', '-20vw']
  );
  const yPosAnim4 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vh', '0vh', '40vh']
  );

  // image 5
  const xPosAnim5 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vw', '0vw', '15vw']
  );
  const yPosAnim5 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['0vh', '0vh', '45vh']
  );

  return (
    <div ref={ref}>
      <div className="relative flex items-center justify-center h-screen p-16 overflow-hidden bg-green-grass">
        <div className="flex items-center justify-center">
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim13,
              y: yPosAnim1,
            }}
            src="/images/image_01.jpeg"
            className="absolute w-1/2"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim2,
              x: xPosAnim2,
            }}
            src="/images/image_02.jpeg"
            className="absolute w-1/2"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim13,
              x: xPosAnim3,
              y: yPosAnim3,
            }}
            src="/images/image_03.jpeg"
            className="absolute w-1/2"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim4,
              x: xPosAnim4,
              y: yPosAnim4,
            }}
            src="/images/image_04.jpeg"
            className="absolute w-1/2"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim5,
              x: xPosAnim5,
              y: yPosAnim5,
            }}
            src="/images/image_05.jpeg"
            className="absolute w-1/2"
            alt=""
          />
          <motion.div style={{}} className="absolute w-1/2">
            <p>
              Want to see more? Check out my social profiles to see more
              designs, projects and things I’m currently working on.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
