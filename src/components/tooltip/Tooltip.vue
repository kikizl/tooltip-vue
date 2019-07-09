<template>
    <div ref="tooltip" class="origin-container">
        <!-- <a
            :data-label="label"
            :class="[newType, position, size, {
                'tooltip': active,
                'is-always': always,
                'is-multiline': multilined,
            }]"
            :style="{'transition-delay': `${delay}ms`}"
            ref="tooltip"
            > -->
            <!-- <span class="triangle" container="body"></span>
            <span class="message" container="body">{{label}}</span> -->
            <slot />
        <!-- </a> -->
        <!-- <button @click="test">eee</button> -->
    </div>
</template>

<script>
export default {
    name: 'Tooltip',
    props: {
        active: {
            type: Boolean,
            default: true
        },
        type: String,
        label: String,
        position: {
            type: String,
            default: 'is-top',
            validator(value) {
                return [
                    'is-top',
                    'is-bottom',
                    'is-left',
                    'is-right',
                    'is-top-left',
                    'is-top-right',
                    'is-bottom-left',
                    'is-bottom-right',
                    'is-left-top',
                    'is-left-bottom',
                    'is-right-top',
                    'is-right-bottom',
                ].indexOf(value) > -1
            }
        },
        always: Boolean,
        multilined: Boolean,
        size: {
            type: String,
            default: 'is-medium'
        },
        delay: {
            type: Number,
            default: 0
        },

    },
    data() {
        return {
            rectObject: {},
            leftOffset: 0,
            topOffset: 0
        }
    },
    computed: {
        newType() {
            return this.type 
            // || config.defaultTooltipType
        },
        computedClass() {
            let arr = [this.newType, this.position, this.size, 
                this.active && 'tooltip',
                this.always && 'is-always',
                this.multilined && 'is-multiline',
            ]

            let names = ''
            if (this.newType) {
                names += (this.newType + ' ')
            }
            if (this.position) {
                names += (this.position + ' ')
            }
            if(this.size) {
                names += (this.size + ' ')
            }
            if (this.active) {
                names += 'tooltip '
            }
            if (this.always) {
                names += 'is-always '
            }
            if (this.multilined) {
                names += 'is-multiline '
            }
            // console.log('names',names)
            return names
        }
    },
    mounted(){
        
        let targetDom = this.$refs['message']
        console.log('hi', this.computedClass, targetDom) 

        this.test()

    },
    methods: {
        test(){
            // console.log('hi',this.$refs['tooltip'], this.$refs['tooltip'].getBoundingClientRect())
            // alert('1')
            let originDom = this.$refs['tooltip']
            console.log('howwwww', originDom)

            this.rectObject = originDom.getBoundingClientRect()
            this.leftOffset = this.rectObject.left
            this.topOffset = this.rectObject.top
            console.log('hoooo',this.topOffset, this.leftOffset)

            var fragment = document.createDocumentFragment();
            var tmpNode = document.createElement("div");
            // console.log('111212',this.computedClass)
            tmpNode.className = 'tooltip-container ' + this.computedClass
            tmpNode.style.top = this.topOffset + 'px'
            tmpNode.style.left = this.leftOffset + 'px'
            tmpNode.style.width = this.rectObject.width + 'px'
            tmpNode.style.height = this.rectObject.height + 'px'
            console.log('hoooo',this.topOffset, this.leftOffset, tmpNode.style.width)
            tmpNode.innerHTML = `<span class="triangle"></span><span class="message">${this.label}</span>`;
            fragment.appendChild(tmpNode);
            
            document.body.appendChild(fragment)
        }
    }
}
</script>
<style lang="scss" >
$bg-color: rgba($color: #000000, $alpha: .6);
$triangle-width: 5px;
$triangle-margin: 2px;

.origin-container {
    display: inline-block;
}
.tooltip-container.tooltip {
    position: absolute;
}
.tooltip {
    position: relative;
    display: inline-flex;
   
    .triangle,
    .message {
        position: absolute;
        content: "";
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        display: inline-block;
    }
    .triangle {
        z-index: 889;
    }
    .message {
        content: attr(data-label);
        width: auto;
        padding: 0.35rem 0.75rem;
        font-size: 0.85rem;
        z-index: 888;
        white-space: nowrap;
        background-color: $bg-color;
        color: #ffffff;
        border-radius: 4px;
        transition: display 1s;
    }
    &:not([data-label=""]):hover .triangle,
    &:not([data-label=""]):hover .message {
        transition-delay: inherit;
        opacity: 1;
        visibility: visible;
    }
    
    &:not([data-label=""]).is-always {
        .triangle,
        .message {
            opacity: 1;
            visibility: visible;
        }
    }
    
    
    &.is-top,
    &.is-top-left,
    &.is-top-right {
        .triangle, .message {
            top: auto;
            right: auto;
            bottom: calc(100% + #{$triangle-width} + #{$triangle-margin});
            left: 50%;
            transform: translateX(-50%);
        }
        .triangle {
            border-top: $triangle-width solid $bg-color;
            border-right: $triangle-width solid transparent;
            border-left: $triangle-width solid transparent;
            bottom: calc(100% + #{$triangle-margin});

        }
    }

    &.is-top-left {
        .triangle {
            left: 16px;
            transform: translateX(0%);
        }
    }

    &.is-top-right {
        .triangle {
            left: auto;
            right: 16px;
            transform: translateX(0%);
        }
    }

    &.is-bottom,
    &.is-bottom-left,
    &.is-bottom-right {
        .triangle, .message {
            top: calc(100% + #{$triangle-width} + #{$triangle-margin});
            right: auto;
            bottom: auto;
            left: 50%;
            transform: translateX(-50%);
        }
        .triangle {
            border-right: $triangle-width solid transparent;
            border-bottom: $triangle-width solid $bg-color;
            border-left: $triangle-width solid transparent;
            top: calc(100% + #{$triangle-margin});
        }
    }

    &.is-bottom-left {
        .triangle {
            left: 16px;
            transform: translateX(0%);
        }
    }

    &.is-bottom-right {
        .triangle {
            left: auto;
            right: 16px;
            transform: translateX(0%);
        }
    }

    &.is-left,
    &.is-left-top,
    &.is-left-bottom { 
        .triangle, .message {
            right: calc(100% + #{$triangle-width} + #{$triangle-margin});
            left: auto;
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
        }
        .triangle {
            border-top: $triangle-width solid transparent;
            border-bottom: $triangle-width solid transparent;
            border-left: $triangle-width solid $bg-color;
            right: calc(100% + #{$triangle-margin});
        }
    }

    &.is-left-top {
        .triangle {
            top: 8px;
            transform: translateX(0%);
        }
    }

    &.is-left-bottom {
        .triangle {
            top: auto;
            bottom: 8px;
            transform: translateX(0%);
        }
    }

    &.is-right,
    &.is-right-top,
    &.is-right-bottom  { 
        .triangle, .message {
            left: calc(100% + #{$triangle-width} + #{$triangle-margin});
            right: auto;
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
        }
        .triangle {
            border-top: $triangle-width solid transparent;
            border-bottom: $triangle-width solid transparent;
            border-right: $triangle-width solid $bg-color;
            left: calc(100% + #{$triangle-margin});
        }
    }

    &.is-right-top {
        .triangle {
            top: 8px;
            transform: translateX(0%);
        }
    }

    &.is-right-bottom {
        .triangle {
            top: auto;
            bottom: 8px;
            transform: translateX(0%);
        }
    }
    
    

    &.is-multiline {
        .message {
            box-sizing: border-box;
            text-align: center;
            white-space: normal;
            word-wrap: break-word;
        }
        &.is-multiline {
            &.is-small .message {
                width: 180px;
            }
            &.is-medium .message {
                width: 240px;
            }
            &.is-large .message {
                width: 300px;
            }
        }
    }
}


// $bg-color: rgba($color: #000000, $alpha: .6);
// $triangle-width: 5px;
// $triangle-margin: 2px;
// .tooltip-container {
//     position: relative;
//     display: block;
// }
// .tooltip {
//     // position: relative;
//     position: fixed;
//     display: inline-flex;
//     &:before,
//     &:after {
//         position: absolute;
//         content: "";
//         opacity: 0;
//         visibility: hidden;
//         pointer-events: none;
//     }
//     &:before {
//         z-index: 889;
//     }
//     &:after {
//         content: attr(data-label);
//         width: auto;
//         padding: 0.35rem 0.75rem;
//         font-size: 0.85rem;
//         z-index: 888;
//         white-space: nowrap;
//         background-color: $bg-color;
//         color: #ffffff;
//         border-radius: 4px;
//         transition: display 1s;
//     }
//     &:not([data-label=""]):hover:before,
//     &:not([data-label=""]):hover:after {
//         transition-delay: inherit;
//         opacity: 1;
//         visibility: visible;
//     }
    
//     &:not([data-label=""]).is-always {
//         &:before,
//         &:after {
//             opacity: 1;
//             visibility: visible;
//         }
//     }
    
    
//     &.is-top,
//     &.is-top-left,
//     &.is-top-right {
//         &:before, &:after {
//             top: auto;
//             right: auto;
//             bottom: calc(100% + #{$triangle-width} + #{$triangle-margin});
//             left: 50%;
//             transform: translateX(-50%);
//         }
//         &:before {
//             border-top: $triangle-width solid $bg-color;
//             border-right: $triangle-width solid transparent;
//             border-left: $triangle-width solid transparent;
//             bottom: calc(100% + #{$triangle-margin});

//         }
//     }

//     &.is-top-left {
//         &:before {
//             left: 16px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-top-right {
//         &:before {
//             left: auto;
//             right: 16px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-bottom,
//     &.is-bottom-left,
//     &.is-bottom-right {
//         &:before, &:after {
//             top: calc(100% + #{$triangle-width} + #{$triangle-margin});
//             right: auto;
//             bottom: auto;
//             left: 50%;
//             transform: translateX(-50%);
//         }
//         &:before {
//             border-right: $triangle-width solid transparent;
//             border-bottom: $triangle-width solid $bg-color;
//             border-left: $triangle-width solid transparent;
//             top: calc(100% + #{$triangle-margin});
//         }
//     }

//     &.is-bottom-left {
//         &:before {
//             left: 16px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-bottom-right {
//         &:before {
//             left: auto;
//             right: 16px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-left,
//     &.is-left-top,
//     &.is-left-bottom { 
//         &:before, &:after {
//             right: calc(100% + #{$triangle-width} + #{$triangle-margin});
//             left: auto;
//             bottom: auto;
//             top: 50%;
//             transform: translateY(-50%);
//         }
//         &:before {
//             border-top: $triangle-width solid transparent;
//             border-bottom: $triangle-width solid transparent;
//             border-left: $triangle-width solid $bg-color;
//             right: calc(100% + #{$triangle-margin});
//         }
//     }

//     &.is-left-top {
//         &:before {
//             top: 8px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-left-bottom {
//         &:before {
//             top: auto;
//             bottom: 8px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-right,
//     &.is-right-top,
//     &.is-right-bottom  { 
//         &:before, &:after {
//             left: calc(100% + #{$triangle-width} + #{$triangle-margin});
//             right: auto;
//             bottom: auto;
//             top: 50%;
//             transform: translateY(-50%);
//         }
//         &:before {
//             border-top: $triangle-width solid transparent;
//             border-bottom: $triangle-width solid transparent;
//             border-right: $triangle-width solid $bg-color;
//             left: calc(100% + #{$triangle-margin});
//         }
//     }

//     &.is-right-top {
//         &:before {
//             top: 8px;
//             transform: translateX(0%);
//         }
//     }

//     &.is-right-bottom {
//         &:before {
//             top: auto;
//             bottom: 8px;
//             transform: translateX(0%);
//         }
//     }
    
    

//     &.is-multiline {
//         &:after {
//             box-sizing: border-box;
//             text-align: center;
//             white-space: normal;
//             word-wrap: break-word;
//         }
//         &.is-multiline {
//             &.is-small:after {
//                 width: 180px;
//             }
//             &.is-medium:after {
//                 width: 240px;
//             }
//             &.is-large:after {
//                 width: 300px;
//             }
//         }
//     }
// }



</style>

