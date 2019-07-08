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

// Base
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
        // padding: 0.35rem 0.75rem;
        font-size: 0.85rem;
        z-index: 888;
        white-space: nowrap;
        // width: max-content; 
        background-color: $bg-color;
        color: #ffffff;
        padding: .5rem 1rem;
        border-radius: 4px;
        max-width: 10rem;
        word-break: break-word;
        // z-index: 1000;
        line-height: .7rem;
        // display: none;
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
    &.is-multiline {
        &:after {
            display: flex-block;
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
                width: 240px;
            }
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


    &.is-bottom{
        &:before {
            top: calc(100% + 5px + 2px);
            right: auto;
            bottom: auto;
            left: 50%;
            transform: translateX(-50%);
            border-right: 5px solid transparent;
            border-bottom: 5px solid $bg-color;
            border-left: 5px solid transparent;
            top: calc(100% + 2px);
        }
        &:after {
            top: calc(100% + 5px + 2px);
            right: auto;
            bottom: auto;
            left: 50%;
            transform: translateX(-50%);
            background-color: $bg-color;
        }
    }
}

</style>

