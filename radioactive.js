Template.radioactive.helpers({
  items: function () {
    return this.items;
  },

  parentClasses: function () {
    return this.parentClass;
  }
});

Template.radioactive.onRendered(function () {
  if (!this.data.items) throw new Meteor.Error('no-items', 'No items supplied to Radioactive.');

  var options = {
    itemSelector: '.radioactive-item',
    layoutMode: 'masonry'
  };

  ['layoutMode', 'transitionDuration'].forEach((opt) => {
    if (this.data[opt]) {
      options[opt] = this.data[opt];
    }
  });

  var masonryOptions = {};

  ['columnWidth', 'gutter', 'isFitWidth', 'percentPosition'].forEach((opt) => {
    if (this.data[opt]) {
      masonryOptions[opt] = this.data[opt];
    }
  });

  if (!_.isEmpty(masonryOptions)) {
    options.masonry = masonryOptions;
  }

  var $el = this.$('.radioactive-container');

  this.data.isotopeInstance = $el.isotope(options);

  $el.imagesLoaded(function () {
    $el.isotope('layout');
  });

  this.observer = this.data.items.observe({
    removed: function (doc) {
      var item = $el.find(`#radioactive-${doc._id}`);
      $el.isotope('remove', item).isotope('layout');
    }
  });

  if (this.data.filter) {
    if (!this.data.filter.get) throw new Meteor.Error('nonreactive-filter', 'The filter property supplied is not a ReactiveVar.');
    this.autorun(() => {
      var filterObj = this.data.filter.get();
      var filter = _.keys(filterObj).map(function (property) {
        return `[data-radioactive-property-${property}="${filterObj[property]}"]`;
      });

      Meteor.setTimeout(function () {
        $el.isotope({
          filter: filter.length ? filter.join('') : '*'
        });
      }, 100);
    });
  }

  if (this.data.sortBy) {
    if (!this.data.sortBy.get) throw new Meteor.Error('nonreactive-sort-by', 'The sortBy property supplied is not a ReactiveVar.');
    this.autorun(() => {
      var sortByObj = this.data.sortBy.get();
      var sortBy = _.keys(sortByObj).reduce(function (arr, property) {
        if (sortByObj[property]) {
          arr.push(property);
        }
        return arr;
      }, []);

      var getSortData = sortBy.reduce((obj, property) => {
        var parser = '';

        if (this.data.parseInts && this.data.parseInts.indexOf(property) >= 0) {
          parser = ' parseInt';
        }

        if (this.data.parseFloats && this.data.parseFloats.indexOf(property) >= 0) {
          parser = ' parseFloat';
        }

        obj[property] = `[data-radioactive-property-${property}]${parser}`;
        return obj;
      }, {});

      var sortAscending = this.data.sortAscending ? this.data.sortAscending.get() : {};

      Meteor.setTimeout(function () {
        $el.isotope({
          sortBy: sortBy,
          sortAscending: sortAscending,
          getSortData: getSortData,
        }).isotope('updateSortData').isotope('layout');
      }, 100);
    });
  }
});

Template.radioactive.onDestroyed(function () {
  if (this.observer) {
    this.observer.stop();
  }
})
