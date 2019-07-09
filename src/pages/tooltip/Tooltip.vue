<template>
    <div class="tooltip-demo">
        <p>demo here</p>
        <section>
            <tooltip label="Tooltip right"
            position="is-right">
                <button class="button is-primary">
                    Right
                </button>
            </tooltip>
            <tooltip label="Tooltip top">
                <button class="button is-primary">
                    Top (default)
                </button>
            </tooltip>
            <tooltip label="Tooltip bottom"
                position="is-bottom">
                <button class="button is-primary">
                    Bottom
                </button>
            </tooltip>
            <tooltip label="Tooltip left"
                position="is-left">
                <button class="button is-primary">
                    Left
                </button>
            </tooltip>
            <tooltip label="Text is here" >
                Simple text
            </tooltip>
        </section>
        <section>
            <tooltip label="Tooltip top left"
                position="is-top-left">
                <button class="button is-primary">
                    Top Left
                </button>
            </tooltip>
            <tooltip label="Tooltip top right"
                position="is-top-right">
                <button class="button is-primary">
                    Top Right
                </button>
            </tooltip>
            <tooltip label="Tooltip bottom left"
                position="is-bottom-left">
                <button class="button is-primary">
                    Bottom Left
                </button>
            </tooltip>
            <tooltip label="Tooltip bottom right"
                position="is-bottom-right">
                <button class="button is-primary">
                    Bottom Right
                </button>
            </tooltip>
        </section>
        <section>
            <tooltip label="Tooltip left top"
                position="is-left-top">
                <button class="button is-primary">
                    Left Top
                </button>
            </tooltip>
            <tooltip label="Tooltip right top"
                position="is-right-top">
                <button class="button is-primary">
                    Right Top
                </button>
            </tooltip>
            <tooltip label="Tooltip left bottom"
                position="is-left-bottom">
                <button class="button is-primary">
                    Left Bottom
                </button>
            </tooltip>
            <tooltip label="Tooltip right bottom"
                position="is-right-bottom">
                <button class="button is-primary">
                    Right Bottom
                </button>
            </tooltip>
        </section>

        <section>
            <tooltip label="Tooltip bottom"
                position="is-bottom">
                <button class="button is-primary">
                    Bottom
                </button>
            </tooltip>

            <tooltip label="I'm never closing"
                :active="active"
                position="is-bottom"
                always>
                <button class="button is-primary">
                    Always
                </button>
            </tooltip>

            
        </section>

        <section>
            <tooltip
                label="Tooltip multilined, probably because it's too long for a casual tooltip"
                position="is-bottom"
                multilined>
                <button class="button is-primary">
                    Multiline (default)
                </button>
            </tooltip>

            <tooltip
                label="It's not briefy, but also not long enough"
                size="is-small"
                position="is-bottom"
                multilined>
                <button class="button is-primary">
                    Multiline (small)
                </button>
            </tooltip>

            <tooltip
                label="Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!"
                position="is-bottom"
                size="is-large"
                multilined>
                <button class="button is-primary">
                    Multiline (large)
                </button>
            </tooltip>
        </section>
        <section>
            <div class="limit-content">
                <tooltip
                    label="It's not briefy, but also not long enough"
                    position="is-left"
                    multilined>
                    <button class="button is-primary">
                        Multiline (small)
                    </button>
                </tooltip>

                <tooltip
                    label="Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!"
                    position="is-left"
                    multilined>
                    <button class="button is-primary">
                        Multiline (large)
                    </button>
                </tooltip>
            </div>
        </section>
    </div>
    
</template>

<script>
import {Tooltip} from '@/components'

export default {
    name: 'TooltipDemo',
    components: {
        Tooltip,
    },
    props: {
    },
    computed: {
    }
}
</script>
<style lang="scss">
.tooltip-demo  {
    & > section {
        // display: flex;
        padding: 20px;

        .tooltip {
            margin: 20px;
        }

    }

    .is-primary {
        box-sizing: border-box;
        padding: 9px 25px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        cursor: pointer;
        font-size: 14px;
        line-height: 14px;
        outline: none;
        border: 1px solid #ddd;
        color: #444;
        background: #f4f4f4;
        font-weight: 400;   
    }

    .limit-content {
        overflow: hidden;
        padding: 24px;
        border: 1px solid rgb(233, 233, 233);
        display: flex;
        flex-direction: column;
        width: 600px;
        margin: 0 auto;
    }
}
</style>
