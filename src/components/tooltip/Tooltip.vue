<template>
    <span
        :data-label="label"
        :class="[newType, position, size, {
            'tooltip': active,
            'is-always': always,
            'is-multiline': multilined,
        }]"
        :style="{'transition-delay': `${delay}ms`}"
        >
        <slot/>
    </span>
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
        }
    },
    computed: {
        newType() {
            return this.type 
            // || config.defaultTooltipType
        },
        newAnimated() {
            return this.animated 
            // || config.defaultTooltipAnimated
        }
    }
}
</script>
<style lang="scss" >
$bg-color: rgba($color: #000000, $alpha: .6);
$triangle-width: 5px;
$triangle-margin: 2px;

.tooltip {
    position: relative;
    display: inline-flex;
    &:before,
    &:after {
        position: absolute;
        content: "";
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }
    &:before {
        z-index: 889;
    }
    &:after {
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
    &:not([data-label=""]):hover:before,
    &:not([data-label=""]):hover:after {
        transition-delay: inherit;
        opacity: 1;
        visibility: visible;
    }
    
    &:not([data-label=""]).is-always {
        &:before,
        &:after {
            opacity: 1;
            visibility: visible;
        }
    }
    
    
    &.is-top,
    &.is-top-left,
    &.is-top-right {
        &:before, &:after {
            top: auto;
            right: auto;
            bottom: calc(100% + #{$triangle-width} + #{$triangle-margin});
            left: 50%;
            transform: translateX(-50%);
        }
        &:before {
            border-top: $triangle-width solid $bg-color;
            border-right: $triangle-width solid transparent;
            border-left: $triangle-width solid transparent;
            bottom: calc(100% + #{$triangle-margin});

        }
    }

    &.is-top-left {
        &:before {
            left: 16px;
            transform: translateX(0%);
        }
    }

    &.is-top-right {
        &:before {
            left: auto;
            right: 16px;
            transform: translateX(0%);
        }
    }

    &.is-bottom,
    &.is-bottom-left,
    &.is-bottom-right {
        &:before, &:after {
            top: calc(100% + #{$triangle-width} + #{$triangle-margin});
            right: auto;
            bottom: auto;
            left: 50%;
            transform: translateX(-50%);
        }
        &:before {
            border-right: $triangle-width solid transparent;
            border-bottom: $triangle-width solid $bg-color;
            border-left: $triangle-width solid transparent;
            top: calc(100% + #{$triangle-margin});
        }
    }

    &.is-bottom-left {
        &:before {
            left: 16px;
            transform: translateX(0%);
        }
    }

    &.is-bottom-right {
        &:before {
            left: auto;
            right: 16px;
            transform: translateX(0%);
        }
    }

    &.is-left,
    &.is-left-top,
    &.is-left-bottom { 
        &:before, &:after {
            right: calc(100% + #{$triangle-width} + #{$triangle-margin});
            left: auto;
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
        }
        &:before {
            border-top: $triangle-width solid transparent;
            border-bottom: $triangle-width solid transparent;
            border-left: $triangle-width solid $bg-color;
            right: calc(100% + #{$triangle-margin});
        }
    }

    &.is-left-top {
        &:before {
            top: 8px;
            transform: translateX(0%);
        }
    }

    &.is-left-bottom {
        &:before {
            top: auto;
            bottom: 8px;
            transform: translateX(0%);
        }
    }

    &.is-right,
    &.is-right-top,
    &.is-right-bottom  { 
        &:before, &:after {
            left: calc(100% + #{$triangle-width} + #{$triangle-margin});
            right: auto;
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
        }
        &:before {
            border-top: $triangle-width solid transparent;
            border-bottom: $triangle-width solid transparent;
            border-right: $triangle-width solid $bg-color;
            left: calc(100% + #{$triangle-margin});
        }
    }

    &.is-right-top {
        &:before {
            top: 8px;
            transform: translateX(0%);
        }
    }

    &.is-right-bottom {
        &:before {
            top: auto;
            bottom: 8px;
            transform: translateX(0%);
        }
    }
    
    

    &.is-multiline {
        &:after {
            box-sizing: border-box;
            text-align: center;
            white-space: normal;
        }
        &.is-multiline {
            &.is-small:after {
                width: 180px;
            }
            &.is-medium:after {
                width: 240px;
            }
            &.is-large:after {
                width: 300px;
            }
        }
    }
}

</style>

