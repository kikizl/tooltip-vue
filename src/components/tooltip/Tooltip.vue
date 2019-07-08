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
        :style="{'transition-delay': `${delay}ms`}">
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
$tooltip-arrow-size: 5px;
$tooltip-arrow-margin: 2px;

$tooltip-multiline-sizes: (
    small: 180px,
    medium: 240px,
    large: 300px
);


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
        padding: 0.35rem 0.75rem;
        // border-radius: $radius-large;
        font-size: 0.85rem;
        // font-weight: $weight-normal;
        box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);
        z-index: 888;
        white-space: nowrap;
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


    // .is-bottom{
    //     top: calc(100% + 6px);
    //     transform: translate(-50%,0);
    //     margin-left:-50%;
    //     &::before{
    //         content:'';
    //         position:absolute;
    //         width: 0;
    //         height: 0;
    //         border-left:6px solid transparent;
    //         border-right:6px solid transparent;
    //         border-bottom:6px solid rgba($color: #000000, $alpha: .6);
    //         top:-6px;
    //         left:calc(50% - 3px);  
    //     }
    // }
}

</style>

