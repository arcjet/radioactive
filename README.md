# Radioactive

A powerful, collection-aware, and reactivity-driven Isotope implementation for Meteor.

## Installation

`meteor add arcjet:radioactive`

## Usage

Simply provide a collection cursor as items and your item template name:

```handlebars
  {{> radioactive items=items template="item"}}
```

You can also provide other options:

```handlebars
  {{> radioactive
    items=items
    template="item"
    parentClass="collection"
    childClass="collection-item"
    percentPosition="true"
  }}
```

You can even sort and filter:

```handlebars
  {{> radioactive
    items=items
    template="item"
    parentClass="collection"
    childClass="collection-item"
    percentPosition="true"
    filter=filter
    sortBy=sortBy
    sortAscending=sortAscending
    parseInts="weight"
  }}
```

A ReactiveVar is necessary to update your filters, sortBys, and sortAscending objects reactively.

## Demo

A demo can be found here:

<http://radioactive-demo.meteor.com/>

The demo source can be found here:

<https://github.com/arcjet/radioactive-demo/>
