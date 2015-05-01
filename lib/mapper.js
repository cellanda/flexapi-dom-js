/*global require module*/
var mapper = require('flexapi-core').mapper;


mapper.settings.property.onGet('match').call(function (node, query, index, logger, done) {
    if (typeof(node) === 'string') {
        done(null, node.match(query));
    }
    else {
        done('node is not string', null);
    }
});

mapper.settings.property.onGet('split').call(function (node, query, index, logger, done) {
    if (typeof(node) === 'string') {
        done(null, node.split(query));
    }
    else {
        done('node is not string', null);
    }
});

mapper.settings.property.onGet('lowercase').unique().call(function (node, query, index, logger, done) {
    if (typeof(node) === 'string') {
        done(null, [node.toLowerCase()]);
    }
    else {
        done('node is not string', null);
    }
});

mapper.settings.property.onGet('uppercase').unique().call(function (node, query, index, logger, done) {
    if (typeof(node) === 'string') {
        done(null, [node.toUpperCase()]);
    }
    else {
        done('node is not string', null);
    }
});

mapper.settings.property.onGet('property').unique().call(function (node, query, index, logger, done) {
    done(null, [node[query]]);
});

mapper.settings.property.onGet('attribute').unique().call(function (node, query, index, logger, done) {
    done(null, [node.getAttribute(query)]);
});

mapper.settings.property.onGet('attributes').unique().call(function (node, query, index, logger, done) {
    done(null, [node.attributes]);
});

mapper.settings.property.onGet('html').unique().call(function (node, query, index, logger, done) {
    done(null, [node['innerHTML']]);
});

mapper.settings.property.onGet('tagName').unique().call(function (node, query, index, logger, done) {
    done(null, [node['tagName']]);
});

mapper.settings.property.onGet('children').call(function (node, query, index, logger, done) {
    var result;
    if (query) {
        if (index === 0) {
            result = [node.querySelector(query)];
        }
        else {
            result = node.querySelectorAll(query);
        }
    }
    else {
        result = node.children;
    }
    done(null, result);
});

mapper.settings.property.onGet('child').unique().call(function (node, query, index, logger, done) {
    var result;
    if (query) {
        result = [node.querySelector(query)];
    }
    else {
        result = [node.children[0]];
    }
    done(null, result);
});

mapper.settings.property.onGet('parent').unique().call(function (node, query, index, logger, done) {
    done(null, [node.parentNode]);
});

mapper.settings.property.onGet('top').unique().call(function (node, query, index, logger, done) {
    done(null, [node.ownerDocument]);
});


module.exports = mapper;
