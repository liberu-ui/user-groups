<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop is-full-touch">
            <enso-form class="box has-background-light raises-on-hover"/>
        </div>
    </div>
</template>

<script>
import { EnsoForm } from '@liberu-ui/forms/bulma';

export default {
    name: 'Create',

    components: { EnsoForm },
};
</script>
