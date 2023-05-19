<template>
    <f7-page name="permits">
        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <h1>Permits</h1>
                <div class="margin-vertical margin-left">
                    <f7-button fill @click="addPermit" color="white">
                        <f7-icon f7="plus_circle" color="teal"></f7-icon>
                        <strong class="display-inline-block padding-left-half">
                            Add Permit
                        </strong>
                    </f7-button>
                </div>
            </div>

            <div class="search-bar bg-custom-color-1 border-radius-12 elevation margin-bottom">
                <div class="row padding border-bottom-solid-2">
                    <div class="row-cell-80 display-flex align-items-center">
                        <div class="navigator-item-icon margin-right bg-custom-color-1">
                            <f7-icon f7="search" />
                        </div>
                        <div style="width:70%">
                            <f7-input type="text"
                                      v-model:value="searchText"
                                      placeholder="Search for Name, Surname, Email and Phone number"
                                      class="input-blank"
                                      clear-button />
                        </div>
                    </div>
                    <div class="row-cell-20 text-align-right">
                        <f7-button fill @click="searchPermits(searchText)" class="padding-horizontal display-inline-block">
                            <strong class="display-inline-block">
                                Search
                            </strong>
                        </f7-button>
                    </div>
                </div>
            </div>

            <div class="bg-custom-color-1 border-radius-12 elevation">
                <div class="row padding border-bottom-solid-2 row-hover"
                     v-for="permit in pagedPermits"
                     :key="permit.id"
                     @click="permitDetails(permit.id)">
                    <div class="row-cell-30 display-flex align-items-center">
                        <div class="navigator-item-icon margin-right bg-custom-color-2">
                            <f7-icon f7="person" />
                        </div>
                        <strong>
                            {{permit.type}}
                        </strong>
                    </div>
                    <div class="row-cell-30">
                        {{permit.from}}
                    </div>
                    <div class="row-cell-30">
                        {{permit.to}}
                    </div>
                    <div class="row-cell-10 text-align-right">
                        <f7-icon f7="chevron_right" color="gray"></f7-icon>
                    </div>
                </div>
                <div class="row padding" v-if="filteredPermits && filteredPermits.length > 0">
                    <div class="row-cell-30">
                        <strong class="display-inline-block margin-right-half">25</strong>
                        Items per page of {{filteredPermits.length}}
                    </div>
                    <div class="row-cell-70 display-flex justify-content-flex-end align-items-center">
                        <div class="page-number-item padding-horizontal padding-vertical-half">
                            <f7-link icon-f7="chevron_left" @click="paginatePermits(1)"></f7-link>
                        </div>
                        <div v-for="n in getPermitsTotalPage()" @click="paginatePermits(n)" class="page-number-item padding-horizontal padding-vertical-half">
                            <b v-if="n == currentPage" style="font-size: 24px;">{{n}}</b>
                            <span v-if="n != currentPage">{{n}}</span>
                        </div>
                        <div class="padding-left padding-vertical-half">
                            <f7-link icon-f7="chevron_right" @click="paginatePermits(getPermitsTotalPage())"></f7-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </f7-page>
</template>
<script>
    import { managePermits } from '../js/permits';

    export default {
        props: {
            f7route: Object,
            f7router: Object,
        },
        setup(props) {
            const { permits, addPermit, permitDetails, searchPermits, filteredPermits, searchText,
                getPermitsTotalPage,
                paginatePermits,
                pagedPermits,
                currentPage } = managePermits(props);

            return {
                permits,
                filteredPermits,
                searchText,
                addPermit,
                permitDetails,
                searchPermits,
                getPermitsTotalPage,
                paginatePermits,
                pagedPermits,
                currentPage
            }; 
        }
    };
</script>
