import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
pb.authStore.loadFromCookie(document.cookie);
export default pb;
