import { triggerNetlifyBuild } from "./netlify-webhook";

export const buildLifecycle = {
  async afterCreate(event) {
    const { model, result } = event;
    console.log(
      `[Collection Lifecycle] Created new entry in ${model.singularName} with ID: ${result.id}`
    );
    await triggerNetlifyBuild(process.env.NETLIFY_BUILD_HOOK_URL || "");
  },
  async afterUpdate(event) {
    const { model, result } = event;
    console.log(
      `[Collection Lifecycle] Updated entry in ${model.singularName} with ID: ${result.id}`
    );
    await triggerNetlifyBuild(process.env.NETLIFY_BUILD_HOOK_URL || "");
  },
  async afterDelete(event) {
    const { model, result } = event;
    console.log(
      `[Collection Lifecycle] Deleted entry in ${model.singularName} with ID: ${result.id}`
    );
    await triggerNetlifyBuild(process.env.NETLIFY_BUILD_HOOK_URL || "");
  },
};
