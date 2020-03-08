<template>
  <div class="">
    <table>
      <tbody>
        <tr>
          <td>名前</td>
          <td>{{ form.name }}</td>
        </tr>
        <tr>
          <td>email</td>
          <td>{{ form.email }}</td>
        </tr>
        <tr>
          <td>channel</td>
          <td>{{ form.channel }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios from "axios";
import myAxios from "~/plugins/myAxios";
export default {
  // middleware: "auth",
  async asyncData({ params, con }) {
    let dataResult = await myAxios.getCommon(`id/${params.id}/User`);
    return { form: dataResult.data };
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
