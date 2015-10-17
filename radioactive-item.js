Template.radioactiveItem.helpers({
  partial: function () {
    Template.parentData(1).positionIDs.push(this._id);
    return Template.parentData(1).template;
  },

  childClasses: function () {
    return Template.parentData(1).childClass;
  }
});
