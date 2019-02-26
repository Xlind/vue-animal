<!-- 相关推荐 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>

    <div class="containMain">
      <div class="innerPageBg">
        <img src="../../../../static/img/bird-bg.jpeg">
      </div>
      <div>
        <!-- 相关推荐分类 -->
        <div class="innerPageCon_1">
          <div class="grayTitle">
            <strong>
              相关书籍
              <span class="lineL"></span>
              <span class="lineR"></span>
            </strong>
          </div>
          <div class="consumptionDesc">
            <div class="data-item" v-for="(book, index) in books" :key="index">
              <img v-bind:src="book.url">
              <h5>{{ book.name }}</h5>
            </div>
          </div>
          <div class="grayTitle">
            <strong>
              相关电影
              <span class="lineL"></span>
              <span class="lineR"></span>
            </strong>
          </div>
          <div class="consumptionDesc">
            <div class="data-item" v-for="(movie, index) in movies" :key="index">
              <img v-bind:src="movie.url">
              <h5>{{ movie.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: {},
      movies: {}
    };
  },
  created() {
    this.$ajax
      .get("animalBooks.json")
      .then(res => {
        this.books = res.data.books;
        this.books.splice(1, 5);
      })
      .catch(err => {
        console.log(err);
      });
    this.$ajax
      .get("animalMovies.json")
      .then(res => {
        this.movies = res.data.movies;
        this.movies.splice(1, 2);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.containMain {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-x: hidden;
}
.grayTitle {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #413d3b;
  font-size: 24px;
  overflow: hidden;
}
.grayTitle strong {
  display: inline-block;
  position: relative;
  font-weight: normal;
}
.grayTitle span {
  width: 100px;
  height: 1px;
  overflow: hidden;
  background-color: #413d3b;
  font-size: 1px;
  position: absolute;
  top: 50%;
  display: inline-block;
}
.grayTitle .lineL {
  left: -120px;
}
.grayTitle .lineR {
  right: -120px;
}

.innerPageCon_1 {
  width: 1200px;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: azure;
  padding: 30px 30px 0 30px;
  -webkit-animation: appear-up 1s ease;
  -moz-animation: appear-up 1s ease;
  -o-animation: appear-up 1s ease;
  animation: appear-up 1s ease;
}

.innerPageCon {
  background-color: #fff;
  padding: 0 40px;
  opacity: 0;
  padding-top: 10px;
}
.innerPageBg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -10;
}
.innerPageBg img {
  width: 100%;
  height: auto;
}
.consumptionDesc {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;
}
.data-item {
  width: 15%;
  height: auto;
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #333;
  text-align: left;
  letter-spacing: 1px;
}
.data-item img {
  width: 100%;
  height: auto;
}
.data-item h5 {
  color: #4b9e98;
}
</style>