module.exports = ({ env }) => ({
    // ...
    'config-sync': {
      enabled: true,
      config: {
        syncDir: "extensions/config-sync/files/",
        minify: false,
        importOnBootstrap: false,
        customTypes: [],
        excludedTypes: [],
        excludedConfig: [
            "core-store.plugin_users-permissions_grant",
            "core-store.core_admin_auth",
            "core-store.plugin_documentation_config",
            "core-store.plugin_i18n_default_locale",
            "core-store.plugin_upload_settings",
            "core-store.plugin_users-permissions_advanced",
            "core-store.plugin_users-permissions_email",
            "core-store.authenticated",
            "role-permissions.authenticated",
            "role-permissions.public"
        ],
      },
    },
  });