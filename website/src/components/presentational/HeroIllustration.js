import styles from "./HeroIllustration.module.scss";

function HeroIllustration(props) {
  return (
    <svg
      width="90%"
      // height="70%"
      viewBox="0 0 227 213"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={styles.illustration}
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="160" height="120" rx="8"></rect>
        <filter
          x="-19.4%"
          y="-24.2%"
          width="138.8%"
          height="151.7%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="10"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-3" x="0" y="0" width="40" height="32" rx="4"></rect>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(-234.000000, -169.000000)">
          <g id="illustration" transform="translate(253.000000, 168.000000)">
            <g
              id="component-wireframe"
              transform="translate(1.000000, 42.000000)"
            >
              <g>
                <use
                  fill="black"
                  fill-opacity="1"
                  filter="url(#filter-2)"
                  xlinkHref="#path-1"
                ></use>
                <use
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  xlinkHref="#path-1"
                ></use>
              </g>
              <g transform="translate(16.000000, 60.000000)">
                <rect
                  fill="#E5E5E5"
                  x="0"
                  y="0"
                  width="129"
                  height="44"
                  rx="4"
                ></rect>
                <g
                  transform="translate(21.000000, 12.000000)"
                  stroke="#CCCCCC"
                  strokeLinecap="round"
                  strokeWidth="4"
                >
                  <path d="M4.45402299,2 L82.5512562,2"></path>
                  <path d="M0.454022989,10 L87,10"></path>
                  <path d="M19,18 L66.0963611,18"></path>
                </g>
              </g>
              <g transform="translate(16.000000, 15.000000)">
                <path
                  d="M52,3 L89.5033332,3"
                  stroke="#CCCCCC"
                  strokeWidth="6"
                  strokeLinecap="round"
                ></path>
                <g
                  transform="translate(51.000000, 15.000000)"
                  stroke="#E5E5E5"
                  strokeLinecap="round"
                  strokeWidth="4"
                >
                  <path d="M0,1 L76,1" strokeLinejoin="round"></path>
                  <path d="M0,9 L60.6559598,9"></path>
                  <path d="M0,9 L60.6559598,9"></path>
                </g>
                <g>
                  <g>
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3"></use>
                    </mask>
                    <use id="Mask" fill="#E5E5E5" xlinkHref="#path-3"></use>
                    <g
                      mask="url(#mask-4)"
                      stroke="#CCCCCC"
                      strokeLinecap="round"
                    >
                      <g transform="translate(20.000000, 16.000000) rotate(-315.000000) translate(-20.000000, -16.000000) translate(-9.000000, -13.000000)">
                        <path d="M32.534211,0.216161602 L25.465789,57.7838384"></path>
                        <path d="M0.216161602,32.534211 L57.7838384,25.465789"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g
              className={styles.arrowsInner}
              transform="translate(31.000000, 42.000000)"
              stroke="#999999"
              strokeLinecap="round"
            >
              <g transform="translate(6.500000, 53.156854) rotate(-135.000000) translate(-6.500000, -53.156854) translate(2.000000, 48.656854)">
                <polyline points="0 3 0 0 3 0"></polyline>
                <path d="M0.345117357,0.345117357 L8.5,8.5"></path>
              </g>
              <g transform="translate(50.500000, 7.449747) rotate(-135.000000) translate(-50.500000, -7.449747) translate(45.500000, 2.449747)">
                <polyline points="0 3 0 0 3 0"></polyline>
                <path d="M0.345117357,0.345117357 L9.91421356,9.91421356"></path>
              </g>
              <g transform="translate(50.500000, 98.428932) rotate(45.000000) translate(-50.500000, -98.428932) translate(46.000000, 93.928932)">
                <polyline points="0.292893219 3.29289322 0.292893219 0.292893219 3.29289322 0.292893219"></polyline>
                <path d="M1.01471863,1.01471863 L8.08578644,8.08578644"></path>
              </g>
              <g transform="translate(50.500000, 65.571068) rotate(-135.000000) translate(-50.500000, -65.571068) translate(46.000000, 61.071068)">
                <polyline points="0.292893219 3.29289322 0.292893219 0.292893219 3.29289322 0.292893219"></polyline>
                <path d="M0.638010576,0.638010576 L8.08578644,8.08578644"></path>
              </g>
              <g transform="translate(57.000000, 24.707107) rotate(-135.000000) translate(-57.000000, -24.707107) translate(54.500000, 22.207107)">
                <polyline points="0 3 0 0 3 0"></polyline>
                <path d="M0.345117357,0.345117357 L5,5"></path>
              </g>
            </g>
            <g
              className={styles.arrowsOuter}
              transform="translate(1.000000, 42.000000)"
              stroke="#999999"
              strokeLinecap="round"
            >
              <g transform="translate(176.071068, 97.742641) rotate(45.000000) translate(-176.071068, -97.742641) translate(171.571068, 93.242641)">
                <polyline points="0.553832073 3.55383207 0.553832073 0.553832073 3.55383207 0.553832073"></polyline>
                <polyline points="8.6177408 5.6177408 8.6177408 8.6177408 5.6177408 8.6177408"></polyline>
                <path d="M0.757290367,0.757290367 L8.57695208,8.57695208"></path>
              </g>
              <g transform="translate(176.071068, 53.863961) rotate(45.000000) translate(-176.071068, -53.863961) translate(171.071068, 48.863961)">
                <polyline points="0.653268504 3.6532685 0.653268504 0.653268504 3.6532685 0.653268504"></polyline>
                <polyline points="9.06901795 6.06901795 9.06901795 9.06901795 6.06901795 9.06901795"></polyline>
                <path d="M1.20057226,1.20057226 L8.24271509,8.24271509"></path>
              </g>
              <g transform="translate(176.071068, 65.863961) rotate(45.000000) translate(-176.071068, -65.863961) translate(171.071068, 60.863961)">
                <polyline points="0.653268504 3.6532685 0.653268504 0.653268504 3.6532685 0.653268504"></polyline>
                <polyline points="9.06901795 6.06901795 9.06901795 9.06901795 6.06901795 9.06901795"></polyline>
                <path d="M1.20057226,1.20057226 L8.24271509,8.24271509"></path>
              </g>
              <g transform="translate(176.071068, 24.621320) rotate(45.000000) translate(-176.071068, -24.621320) translate(173.071068, 21.621320)">
                <polyline points="0.553832073 3.55383207 0.553832073 0.553832073 3.55383207 0.553832073"></polyline>
                <polyline points="5.78931368 2.78931368 5.78931368 5.78931368 2.78931368 5.78931368"></polyline>
                <path d="M0.757290367,0.757290367 L5.75185834,5.75185834"></path>
              </g>
              <g transform="translate(176.071068, 7.449747) rotate(45.000000) translate(-176.071068, -7.449747) translate(171.071068, 2.449747)">
                <polyline points="0.553832073 3.55383207 0.553832073 0.553832073 3.55383207 0.553832073"></polyline>
                <polyline points="9.32484758 6.32484758 9.32484758 9.32484758 6.32484758 9.32484758"></polyline>
                <path d="M0.757290367,0.757290367 L9.24271509,9.24271509"></path>
              </g>
              <g transform="translate(36.506097, 152.449747) rotate(-45.000000) translate(-36.506097, -152.449747) translate(22.006097, 137.949747)">
                <polyline points="0.553832073 3.55383207 0.553832073 0.553832073 3.55383207 0.553832073"></polyline>
                <polyline points="28.1022907 25.1022907 28.1022907 28.1022907 25.1022907 28.1022907"></polyline>
                <path d="M0.757290367,0.757290367 L27.2321302,27.2321302"></path>
              </g>
              <g transform="translate(0.000000, 166.000000)">
                <polyline
                  transform="translate(3.027053, 2.501559) rotate(-45.000000) translate(-3.027053, -2.501559) "
                  points="1.54020626 4.00155945 1.54020626 1.00155945 4.51389877 1.00155945"
                ></polyline>
                <polyline
                  transform="translate(156.661167, 2.501559) rotate(-45.000000) translate(-156.661167, -2.501559) "
                  points="158.148013 1.00155945 158.148013 4.00155945 155.174321 4.00155945"
                ></polyline>
                <path d="M1.65327791,2.49168076 L159,2.49168076 L1.65327791,2.49168076 Z"></path>
              </g>
            </g>
            <g
              className={styles.classnames}
              transform="translate(28.000000, 0.000000)"
              fill="#999999"
              fontFamily="CourierNewPS-BoldMT, Courier New"
              fontSize="8"
              fontWeight="bold"
            >
              <text>
                <tspan x="155" y="69">
                  mb_sm
                </tspan>
              </text>
              <text>
                <tspan x="155" y="109">
                  pt_md
                </tspan>
              </text>
              <text>
                <tspan x="155" y="97">
                  mb_md
                </tspan>
              </text>
              <text>
                <tspan x="155" y="141">
                  pb_md
                </tspan>
              </text>
              <text>
                <tspan x="155" y="51">
                  pt_lg
                </tspan>
              </text>
              <text transform="translate(10.500000, 187.000000) rotate(-360.000000) translate(-10.500000, -187.000000) ">
                <tspan x="0" y="189">
                  w_xl
                </tspan>
              </text>
              <text>
                <tspan x="46" y="205">
                  w_4xl
                </tspan>
              </text>
              <text>
                <tspan x="43" y="7">
                  fz_md
                </tspan>
              </text>
              <text>
                <tspan x="43" y="20">
                  fz_lg
                </tspan>
              </text>
            </g>
            <g
              className={styles.lines}
              transform="translate(0.000000, 5.000000)"
              stroke="#7F7F7F"
              strokeDasharray="1,4,1,4"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              strokeWidth="0.5"
            >
              <path d="M37.5,97 L176.500899,97" id="Line-5"></path>
              <path d="M37.5,84 L176.500899,84" id="Line-5-Copy"></path>
              <path d="M161,151.5 L161,203.523526" id="Line-5-Copy-4"></path>
              <path d="M57,81.4899502 L57,188.510513" id="Line-5-Copy-8"></path>
              <path d="M1.5,154.5 L1.5,205.5" id="Line-5-Copy-5"></path>
              <path d="M17,81.4899502 L17,189.501157" id="Line-5-Copy-4"></path>
              <path d="M81.5,52 L176.501316,52" id="Line-5"></path>
              <path d="M81.5,37 L178.501289,37" id="Line-5-Copy"></path>
              <path d="M81.5,109 L178.501289,109" id="Line-5-Copy-7"></path>
              <path d="M81.5,129 L175.50133,129" id="Line-5-Copy-7"></path>
              <path d="M81.5,141 L175.50133,141" id="Line-5-Copy-6"></path>
              <path d="M88.5,66 L176.50142,66" id="Line-5-Copy-7"></path>
              <path d="M88.5,58 L176.535504,58" id="Line-5-Copy-6"></path>
              <path
                d="M66,13 C54.4020203,13 45,22.4020203 45,34 C45,45.5979797 54.4020203,55 66,55"
                id="Oval-6-Copy-2"
              ></path>
              <path
                d="M66,0 C47.2223185,0 32,15.2223185 32,34 C32,52.7776815 47.2223185,68 66,68"
                id="Oval-6-Copy"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default HeroIllustration;
