<template>
    <div class="tooltip-demo">
        <p>demo here</p>

        <section>
            <tooltip label="Tooltip bottom"
                position="is-bottom">
                <button class="button is-dark">
                    Bottom
                </button>
            </tooltip>

            <tooltip label="I'm never closing"
                :active="active"
                position="is-bottom"
                always>
                <button class="button">
                    Always
                </button>
            </tooltip>
        </section>

        <section>
            <tooltip
                label="Tooltip multilined, probably because it's too long for a casual tooltip"
                position="is-bottom"
                multilined>
                <button class="button is-dark">
                    Multiline (default)
                </button>
            </tooltip>

            <tooltip
                label="It's not briefy, but also not long enough"
                size="is-small"
                position="is-bottom"
                multilined>
                <button class="button is-dark">
                    Multiline (small)
                </button>
            </tooltip>

            <tooltip
                label="Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!"
                position="is-bottom"
                size="is-large"
                multilined>
                <button class="button is-dark">
                    Multiline (large)
                </button>
            </tooltip>
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
        display: flex;
        padding: 20px;

        .tooltip {
            margin: 20px;
        }

    }
}
</style>
