export default function({ store, redirect }) {
  console.log(store.getters.isLogin);
  if (store.getters.isLogin) redirect("/index");
}
