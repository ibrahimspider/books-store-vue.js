<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4" v-for="book in books" :key="book">
        <div class="book shadow text-center">
          <img src="@/assets/clipart4171158.png" alt="" />
          <h2>
            <span @dblclick="show = false" v-if="show">{{ book.name }}</span>
            <input
              type="text"
              @keyup.enter="updateData(book.id, 'name', book.name)"
              v-if="!show"
              v-model="book.name"
            />
          </h2>
          <p>
            <span @dblclick="show1 = false" v-if="show1">{{ book.price }}</span>
            <input
              type="number"
              @keyup.enter="updateData(book.id, 'price', book.price)"
              v-if="!show1"
              v-model="book.price"
            /><span class="Currency">{{ Currency }}</span>
          </p>
          <button class="btn btn-success mb-2">
            <router-link :to="{ name: 'edit', params: { id: book.id } }"
              >Edit</router-link
            >
          </button>
          <button class="btn btn-danger mb-2" @click="deleteBook(book.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListBooks",
  data() {
    return {
      books: [],
      Currency: " EGP",
      show: true,
      show1: true,
    };
  },
  created() {
    axios.get("https://vuango-books-api.herokuapp.com/books/").then((res) => {
      this.books = res.data;
    });
  },
  methods: {
    updateData(id, item, value) {
      axios
        .patch(
          `https://vuango-books-api.herokuapp.com/books/${id}/?${item}=${value}`
        )
        .then((res) => {
          console.log(res.status);
        });
      if (item == "name") {
        this.show = true;
      } else this.show1 = true;
    },
    deleteBook(id) {
      axios
        .delete(`https://vuango-books-api.herokuapp.com/books/${id}/`)
        .then((res) => {
          console.log(res.status);
          this.$router.go();
        });
    },
  },
};
</script>
<style scoped lang="scss">
.book {
  position: relative;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-bottom: 50px;
  img {
    max-width: 100px;
    margin: 10px auto;
  }
  p {
    color: red;
    font-weight: bold;
    .Currency {
      color: rgb(130, 130, 130);
    }
  }
  .btn {
    padding: 0;
  }
  .btn a {
    color: #fff;
    text-decoration: none;
    outline: none;
    display: inline-block;
    padding: 5px 10px;
  }
  .btn-success {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .btn-danger {
    position: absolute;
    bottom: 10px;
    left: right;
    padding: 5px 10px;
  }
}
</style>
