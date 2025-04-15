import { Core } from "@strapi/strapi";
import { triggerNetlifyBuild } from "./utils/netlify-webhook";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log("Starting collection lifecycle");
    console.log(strapi.db.lifecycles);
    strapi.db.lifecycles.subscribe({
      models: ["*"], // This will match all content types
      async beforeCreate(event) {
        const { model } = event;
        console.log(
          `[Collection Lifecycle] Creating new entry in ${model.singularName}`
        );
        // Add your pre-create logic here
      },
      async afterCreate(event) {
        const { model, result } = event;
        console.log(
          `[Collection Lifecycle] Created new entry in ${model.singularName} with ID: ${result.id}`
        );
        await triggerNetlifyBuild(process.env.NETLIFY_BUILD_HOOK_URL || "");
        // Add your post-create logic here
      },
      async beforeUpdate(event) {
        const { model, params } = event;
        console.log(
          `[Collection Lifecycle] Updating entry in ${model.singularName} with ID: ${params.where.id}`
        );
        // Add your pre-update logic here
      },
      async afterUpdate(event) {
        const { model, result } = event;
        console.log(
          `[Collection Lifecycle] Updated entry in ${model.singularName} with ID: ${result.id}`
        );
        await triggerNetlifyBuild(process.env.NETLIFY_BUILD_HOOK_URL || "");
        // Add your post-update logic here
      },
      async beforeDelete(event) {
        const { model, params } = event;
        console.log(
          `[Collection Lifecycle] Deleting entry in ${model.singularName} with ID: ${params.where.id}`
        );
        // Add your pre-delete logic here
      },
      async afterDelete(event) {
        const { model, result } = event;
        console.log(
          `[Collection Lifecycle] Deleted entry in ${model.singularName} with ID: ${result.id}`
        );
        await triggerNetlifyBuild(process.env.NETLIFY_BUILD_HOOK_URL || "");
        // Add your post-delete logic here
      },
    });
  },
};
