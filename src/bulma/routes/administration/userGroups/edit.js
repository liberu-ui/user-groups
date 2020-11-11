const UserGroupEdit = () => import('../../../pages/userGroups/Edit.vue');

export default {
    name: 'administration.userGroups.edit',
    path: ':userGroup/edit',
    component: UserGroupEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit User Group',
    },
};
