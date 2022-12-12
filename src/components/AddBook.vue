<template>
  <div class="container">
    <div class="form shadow">
      <h1 class="text-center">Add New Book</h1>
      <form>
        <div class="form-group">
          <input
            type="text"
            v-model="book.name"
            class="form-control"
            placeholder="Book Name"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            v-model="book.price"
            class="form-control"
            placeholder="Book Price"
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            @click.prevent="sendData"
            class="btn btn-primary mb-2"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AddBook",
  data() {
    return {
      book: {
        name: "",
        price: 0,
      },
    };
  },
  methods: {
    sendData() {
      axios
        .post("https://vuango-books-api.herokuapp.com/books/", this.book)
        .then((res) => {
          console.log(res.status);
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
<style scoped lang="scss">
.form {
  max-width: 600px;
  margin: 30px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  h1 {
    color: green;
    margin-bottom: 30px;
  }
  .form-group {
    margin-bottom: 20px;
  }
}
</style>
