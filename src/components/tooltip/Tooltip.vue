<template>
    <span
        :data-label="label"
        :class="[newType, position, size, {
            'tooltip': active,
            'is-square': square,
            'is-animated': newAnimated,
            'is-always': always,
            'is-multiline': multilined,
            'is-dashed': dashed
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
                    'is-right'
                ].indexOf(value) > -1
            }
        },
        always: Boolean,
        animated: Boolean,
        square: Boolean,
        dashed: Boolean,
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
        // width: max-content; 
        background-color: $bg-color;
        color: #ffffff;
        // padding: .5rem 1rem;
        border-radius: 4px;
        // max-width: 10rem;
        // word-break: break-word;
        // z-index: 1000;
        // line-height: .7rem;
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
    
    &.is-dashed {
        // border-bottom: 1px dashed $grey-light;
        cursor: default;
    }
    &.is-square {
        &:after {
            border-radius: 0;
        }
    }
    &.is-animated {
        &:before,
        &:after {
            // transition: opacity $speed $easing, visibility $speed $easing;
        }
    }
    &.is-top {
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

    &.is-bottom {
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

    &.is-left { 
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

    &.is-right { 
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

