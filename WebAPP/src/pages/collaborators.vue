<template>
    <f7-page name="collaborators">

        <div class="page-content-wrapper">
            <div class="display-flex justify-content-space-between">
                <h1>{{ $t("collaborators.collaborators") }}</h1>
                <div class="margin-vertical margin-left">
                    <f7-button fill @click="addCollaborator" color="white">
                        <f7-icon f7="plus_circle" color="teal"></f7-icon>
                        <strong class="display-inline-block padding-left-half">
                            {{ $t("collaborators.addCollaborator") }}
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
                                      :placeholder="$t('collaborators.searchPlaceHolder')"
                                      class="input-blank"
                                      clear-button />
                        </div>
                    </div>
                    <div class="row-cell-20 text-align-right">
                        <f7-button fill @click="searchCollaborators()" class="padding-horizontal display-inline-block">
                            <strong class="display-inline-block">
                                {{ $t("generic.search") }}
                            </strong>
                        </f7-button>
                    </div>
                </div>
            </div>

            <div class="bg-custom-color-1 border-radius-12 elevation">
                    <div class="row padding border-bottom-solid-2 row-hover"
                         v-for="collaborator in pagedCollaborators"
                         :key="collaborator.id"
                         @click="collaboratorDetails(collaborator.id)">
                        <div class="row-cell-30 display-flex align-items-center">
                            <div class="navigator-item-icon margin-right bg-custom-color-2">
                                <f7-icon f7="person" />
                            </div>
                            <strong>
                                {{collaborator.name + ' ' + collaborator.surname}}
                            </strong>
                        </div>
                        <div class="row-cell-30">
                            <f7-link :href="'mailto:'+collaborator.email">
                                {{collaborator.email}}
                            </f7-link>
                        </div>
                        <div class="row-cell-30">
                            {{collaborator.tel}}
                        </div>
                        <div class="row-cell-10 text-align-right">
                            <f7-icon f7="chevron_right" color="gray"></f7-icon>
                        </div>
                    </div>
                <div class="row padding" v-if="filteredCollaborators && filteredCollaborators.length > 0">
                    <div class="row-cell-30">
                        <strong class="display-inline-block margin-right-half">1</strong>
                        {{ $t("generic.itemsForPage") }} {{filteredCollaborators.length}}
                    </div>
                    <div class="row-cell-70 display-flex justify-content-flex-end align-items-center">
                        <div class="page-number-item padding-horizontal padding-vertical-half">
                            <f7-link icon-f7="chevron_left" @click="paginateCollaborators(1)"></f7-link>
                        </div>
                        
                        
                        <div v-for="n in getCollaboratorsTotalPage()" @click="paginateCollaborators(n)" class="page-number-item padding-horizontal padding-vertical-half">
                            <b v-if="n == currentPage" style="font-size: 24px;">{{n}}</b>
                            <span v-if="n != currentPage">{{n}}</span>
                        </div>
                              
                        <div class="padding-left padding-vertical-half">
                            <f7-link icon-f7="chevron_right" @click="paginateCollaborators(getCollaboratorsTotalPage())"></f7-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </f7-page>
</template>
<script>
    import { manageCollaborators } from '../js/collaborators';
    
    export default {
        props: {
            f7route: Object,
            f7router: Object,
        },
        setup(props) {
            const {
                collaborators,
                addCollaborator,
                collaboratorDetails,
                searchCollaborators,
                filteredCollaborators,
                searchText,
                getCollaboratorsTotalPage,
                paginateCollaborators,
                pagedCollaborators,
                currentPage
            } = manageCollaborators(props);

            return {
                filteredCollaborators,
                searchText,
                collaborators,
                addCollaborator,
                collaboratorDetails,
                searchCollaborators,
                getCollaboratorsTotalPage,
                paginateCollaborators,
                pagedCollaborators,
                currentPage
            };
        }
    };
</script>
