<template>
    <router-link
        :to="{ name: 'singlepost', params: { id: postid, pagetitle: title } }"
    >
        <section class="card">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
        </section>
    </router-link>
</template>

<script>
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
    transition: border 0.2s ease;

    &:hover {
        border: 1px solid #f52653;
        box-shadow: 0 3px 13px rgba($color: #000000, $alpha: 0.2);
    }

    h2 {
        line-height: 1.5;
        margin-bottom: 7px;
        font-size: 1.3rem;

        &::first-letter {
            text-transform: uppercase;
        }
    }
    p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #797979;
    }
}
</style>
