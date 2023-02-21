"use strict";
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 7491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ ParticlesDotBg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3047);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_3__);




const ParticlesBackground = ()=>{
    const particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (engine)=>{
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(engine);
    }, []);
    const particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (container)=>{
        await console.log(container);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default()), {
        init: particlesInit,
        loaded: particlesLoaded,
        options: {
            fullScreen: {
                enable: false
            },
            fpsLimit: 1000,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.8,
                    width: 0.5
                },
                collisions: {
                    enable: false
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 3,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000
                    },
                    value: 50
                },
                opacity: {
                    value: 0.5
                },
                // shape: {
                //   type: "circle",
                // },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParticlesBackground);
const ParticlesDotBg = ()=>{
    const particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (engine)=>{
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(engine);
    }, []);
    const particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (container)=>{
        await console.log(container);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default()), {
        id: "space",
        init: particlesInit,
        loaded: particlesLoaded,
        options: {
            fullScreen: {
                enable: false
            },
            backgroundMode: {
                enable: true,
                zIndex: 0
            },
            background: {
                color: "#10051F"
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: false,
                            force: 2,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 0.3,
                        opacity: 1,
                        size: 4,
                        speed: 1
                    },
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#fff"
                },
                links: {
                    color: "#231920",
                    distance: 500,
                    enable: false,
                    opacity: 0.4,
                    width: 2
                },
                move: {
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    },
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: false,
                    size: true,
                    speed: 0.2,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 1400
                    },
                    value: 200
                },
                opacity: {
                    random: true,
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 3
                }
            },
            detectRetina: true
        }
    });
};


/***/ })

};
;