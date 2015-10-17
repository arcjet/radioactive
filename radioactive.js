Template.radioactive.helpers({
  items: function () {
    return this.items;
  },

  parentClasses: function () {
    return this.parentClass;
  }
});

Template.radioactive.onCreated(function () {
  this.index = 0;
});

Template.radioactive.onRendered(function () {
  if (!this.data.items) throw new Meteor.Error('no-items', 'No items supplied to Radioactive.');

  var positionIDs = new ReactiveArray();

  var renderableContent = Blaze.Each(() => {
    return this.data.items.get();
  }, function () {
    return Template.radioactiveItem;
  });

  this.autorun(() => {
    var items = positionIDs.list();
    var positions = [];
    var x = 0;
    var y = 0;
    var container = getSize(this.find('.radioactive-container'));

    for (var i = this.index, ii = items.length; i < ii; i++) {
      var el = this.find(`#radioactive-${items[i]}`);
      var size = getSize(el);

      x = 0;
      y = 0;
      // yMin = 0;

      for (var j = 0, jj = positions.length; j < jj; j++) {
        var position = positions[j];

        if (position.width + x > container.width) {
          x = 0;
          // yMin = Math.max(yMin, ;
          y += position.height;
        }
        else {
          x += position.width;
          // if (y < ) break
        }
      }

      this.$(el).css({
        position: 'absolute',
        left: x,
        top: y
      });

      positions.push({
        width: size.outerWidth,
        height: size.outerHeight
      });
    };

    this.index = items.length;
  });

  Blaze.renderWithData(renderableContent, {
    positionIDs: positionIDs,
    template: this.data.template,
    childClass: this.data.childClass
  }, this.find('.radioactive-container'), Blaze.currentView);
});

Template.radioactive.onDestroyed(function () {
  this.RadioactiveItems = null;
})
