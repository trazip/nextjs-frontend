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
    <div id="experiment-section" ref={ref}>
      <div className="relative flex items-center justify-center h-screen p-16 overflow-hidden bg-gray-900">
        <div className="flex items-center justify-center">
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim13,
              y: yPosAnim1,
            }}
            src="/images/project_01.png"
            className="absolute z-20 w-1/2 rounded-sm"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim2,
              x: xPosAnim2,
            }}
            src="/images/project_02.png"
            className="absolute z-10 w-1/2 rounded-sm"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim13,
              x: xPosAnim3,
              y: yPosAnim3,
            }}
            src="/images/project_03.png"
            className="absolute z-10 w-1/2 rounded-sm"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim4,
              x: xPosAnim4,
              y: yPosAnim4,
            }}
            src="/images/project_04.png"
            className="absolute z-10 w-1/2 rounded-sm"
            alt=""
          />
          <motion.img
            style={{
              scale: scaleAnim,
              rotateZ: zRotAnim5,
              x: xPosAnim5,
              y: yPosAnim5,
            }}
            src="/images/project_05.png"
            className="absolute z-10 w-1/2 rounded-sm"
            alt=""
          />
          <div className="absolute z-0 w-1/4 mb-8 text-xl text-center text-white">
            <h5 className="mb-4 font-medium">Want to see more?</h5>
            <p className="font-light">
              Check out my Linkedin, Github or Codewars profiles to see what I’m
              currently working on.
            </p>
            <div className="flex items-center mt-6 justify-evenly">
              <a
                href="https://www.linkedin.com/in/pierre-penhard/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-4 bg-gray-600 rounded-full cursor-pointer">
                  <span
                    className="iconify"
                    data-icon="dashicons:linkedin"
                    data-inline="false"
                  />
                </div>
              </a>
              <a
                href="https://github.com/trazip"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-4 bg-gray-600 rounded-full cursor-pointer">
                  <span
                    className="iconify"
                    data-icon="akar-icons:github-fill"
                    data-inline="false"
                  />
                </div>
              </a>
              <a
                href="https://www.codewars.com/users/trazip"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-4 bg-gray-600 rounded-full cursor-pointer">
                  <span
                    className="iconify"
                    data-icon="cib:codewars"
                    data-inline="false"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
