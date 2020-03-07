export default async function({ store, redirect }) {
  if (!store.state.authUser) redirect("index");
}
