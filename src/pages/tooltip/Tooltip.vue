<template>
    <div class="tooltip-demo">
        <p>demo here</p>

        <tooltip label="Tooltip bottom"
            position="is-bottom">
            <button class="button is-dark">
                Bottom
            </button>
        </tooltip>

        <!-- <tooltip label="I'm never closing"
            :active="active"
            always>
            <button class="button">
                Always
            </button>
        </tooltip> -->
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
