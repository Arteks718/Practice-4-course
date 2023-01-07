var quotesArray = [
  {
    quote: "This is just a Quote1",
    source: "",
  },
  {
    quote:
      "This is just a Quote2This is just a Quote2This is just a Quote2This is just a Quote2This is just a Quote2",
    source: "Martin",
  },
  {
    quote: "This is just a Quote3",
    source: "Dennis",
  },
  {
    quote: "This is just a Quote4",
    source: "Christopher",
  },
];

var app = new Vue({
  el: "#app",
  data: {
    quotes: quotesArray,
    isAuthor: "",
    sortedQuotes: [],
  },
  computed: {
    filteredQuotes: function () {
      return this.quotes.filter((element) => {
        return Boolean(this.isAuthor) == Boolean(element.source);
      });
    },
  },
  methods: {
    sortBySource() {
      this.sortedQuotes = [...this.quotes].sort((a, b) =>
        a.source > b.source ? 1 : -1
      );
    },
  },
});
