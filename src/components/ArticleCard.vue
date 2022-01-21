<template>
  <router-link
    :to="{ name: 'singlepost', params: { id: postid, pagetitle: title } }"
  >
    <section class="card">
      <header>
        <div class="post-details">
          <h2 class="post-title">
            {{ title }}
          </h2>
        </div>
        <div class="meta-info">
          <span class="author">written by {{ author }}</span>
          <span class="date">{{ formattedDate }}</span>
        </div>
      </header>
      <p>{{ content }}</p>
    </section>
  </router-link>
</template>

<script>
import moment from "moment";

export default {
  name: "ArticleCard",
  props: {
    title: {
      type: String,
      required: false,
      default: "this is my first content",
    },
    content: {
      type: String,
      required: false,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos aspernatur et nesciunt tenetur illo sit autem officia at porro impedit reprehenderit dolorem quos harum inventore facere dicta commodi laudantium.",
    },
    postid: Number,
    date: String,
    author: String,
  },
  computed: {
    formattedDate() {
      // return moment(this.date).format("ll");
      return moment(this.date).startOf("hour").fromNow();
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #333;
}
.card {
  padding: 15px;
  border: 1px solid #bbbbbb;
  border-radius: 7px;
  margin-bottom: 20px;
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #f52653;
    box-shadow: 0 3px 13px rgba($color: #000000, $alpha: 0.3);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    h2 {
      line-height: 1.5;
      margin-bottom: 7px;
      font-size: 1.3rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &::first-letter {
        text-transform: uppercase;
      }
      .dot {
        margin-left: 7px;
        vertical-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .meta-info {
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.75rem;
        color: #797979;
        font-style: italic;
        // padding-right: 10px;
        font-weight: 500;
        text-align: right;
      }
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #797979;
  }
}
</style>
