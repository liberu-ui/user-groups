/**
 * The user group edit component.
 * @typedef {import('vue').Component} UserGroupEdit
 */

/**
 * The user groups edit route.
 * @type {import('vue-router').RouteConfig}
 */
export default {
  name: 'administration.userGroups.edit',
  
  /**
   * The path for the user group edit route.
   * @type {string}
   */
  path: ':userGroup/edit',
  
  /**
   * The component to be rendered for the user group edit route.
   * @type {UserGroupEdit}
   */
  component: UserGroupEdit,
  
  /**
   * Additional metadata for the user group edit route.
   * @type {Object}
   * @property {string} breadcrumb - The breadcrumb for the route.
   * @property {string} title - The title for the user group edit page.
   */
  meta: {
    breadcrumb: 'edit',
    title: 'Edit User Group',
  },
};