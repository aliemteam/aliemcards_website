const axios = require('axios');
const withSass = require('@zeit/next-sass');

const config = require('./components/config');

// https://github.com/zeit/next.js/blob/canary/examples/with-static-export/next.config.js
module.exports = withSass({
    async exportPathMap() {
        // get categories
        const res_cats = await axios.get(config.api.categories);
        const cats = res_cats.data.categories;
        const catPages = {};
        cats.forEach(cat => {
            catPages[`/categories/${cat.slug}`] = { page: '/category', query: { slug: cat.slug }}
        });
        // get cards
        const res_cards = await axios.get(config.api.summaries);
        const cards = res_cards.data.card_summaries;
        const cardPages = {};
        cards.forEach(card => {
            cardPages[`/cards/${card.slug}`] = { page: '/card', query: { slug: card.slug }}
        });
        const pages = Object.assign({}, catPages, cardPages);
        return Object.assign({}, pages, {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contact': { page: '/contact'},
            '/cards': { page: '/cards'},
            '/categories': { page: '/categories'},
        });   
    }
});
