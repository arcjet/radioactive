Template.radioactiveItem.helpers({
  partial: function () {
    return Template.parentData(1).template;
  },

  childClasses: function () {
    return Template.parentData(1).childClass;
  },

  attrs: function () {
    var attrs = [];

    if (Template.parentData(1).filter) {
      attrs = attrs.concat(_.keys(Template.parentData(1).filter.get()));
    }

    if (Template.parentData(1).sortBy) {
      attrs = attrs.concat(_.keys(Template.parentData(1).sortBy.get()));
    }

    if (Template.parentData(1).sortAscending) {
      attrs = attrs.concat(_.keys(Template.parentData(1).sortAscending.get()));
    }

    return _.uniq(attrs).reduce((obj, property) => {
      obj[`data-radioactive-property-${property}`] = this[property];
      return obj;
    }, {});
  }
});

Template.radioactiveItem.onRendered(function () {
  var parentData = Template.parentData(1);
  this.$('.radioactive-item').imagesLoaded(function () {
    parentData.isotopeInstance.isotope('layout');
  });
  Meteor.setTimeout(function () {
    parentData.isotopeInstance.isotope('layout');
  }, 100);
});
