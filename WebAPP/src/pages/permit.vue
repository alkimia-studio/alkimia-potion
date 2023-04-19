<template>
    <f7-page name="permit">
        <f7-navbar :title="permit.type" back-link="Back">&nbsp;&nbsp;&nbsp;<f7-toggle v-model:checked="editMode"></f7-toggle>&nbsp;<span>Edit</span></f7-navbar> 
        <f7-block>
            <div class="grid grid-cols-2 grid-gap">
                <div>Type</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="permit.type" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>From</div>
                <div><f7-input type="date" :disabled="!editMode" v-model:value="permit.from" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>To</div>
                <div><f7-input type="date" :disabled="!editMode" v-model:value="permit.to" /></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>All day</div>
                <div><f7-input type="checkbox" :disabled="!editMode" v-model:checked="permit.allday"></f7-input></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>To recover</div>
                <div><f7-input type="checkbox" :disabled="!editMode" v-model:checked="permit.torecover"></f7-input></div>
            </div>
            <div class="grid grid-cols-2 grid-gap">
                <div>Note</div>
                <div><f7-input type="text" :disabled="!editMode" v-model:value="permit.note" /></div>
            </div>
        </f7-block>
        <f7-block v-if="editMode">
            <f7-button fill small @click="postPermit(permit)">Save Permit</f7-button>
        </f7-block>
    </f7-page>
</template>
<script>
    import { useStore } from 'framework7-vue';
    import store from '../js/store';

    export default {
        props: {
            f7route: Object
        },
        data() {
            return {
                editMode: false
            }
        },
        setup(props) {
            const permits = useStore('permits');
            const permitId = props.f7route.params.id;
            let currentPermit;
            permits.value.forEach(function (permit) {
                if (permit.id.toString() === permitId) {
                    currentPermit = permit;
                }
            });

            const postPermit = (permit) => {
                if (permit.id == 0)
                    store.dispatch('postPermit', permit);
                else
                    store.dispatch('putPermit', permit);
            };

            return {
                permit: currentPermit,
                postPermit
            };
        },
    };
</script>
