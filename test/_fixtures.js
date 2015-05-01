/*global require module jasmine beforeEach*/

var fixtures = {

    sampleDomFixture: function () {
        var document;
        var node1;
        var node2;
        var fixture = {
            document: {
                querySelector: function (query) {
                    return node1;
                },
                querySelectorAll: function (query) {
                    return [
                        node1,
                        node2
                    ]
                },

                doctype: {

                },

                documentElement: {
                    nodeName: 'HTML', 
                    children: [
                        { 
                            nodeName: 'HEAD'
                        },
                        {
                            nodeName: 'BODY',
                            children: [
                                {
                                    nodeName: 'DIV',
                                    innerHTML: 'John Smith',
                                    getAttribute: function () {
                                        return 'John.Smith';
                                    }
                                },
                                {
                                    nodeName: 'P',
                                    innerHTML: 'Samantha Fox',
                                    getAttribute: function () {
                                        return 'Samantha.Fox';
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        };

        document = fixture.document
        document.ownerDocument = null;
        document.doctype.ownerDocument = document;
        document.doctype.parentNode = document
        document.documentElement.ownerDocument = document;
        document.documentElement.parentNode = document
        document.head = document.documentElement.children[0];
        document.head.ownerDocument = document;
        document.head.parentNode = document.documentElement;
        document.body = document.documentElement.children[1];
        document.body.ownerDocument = document;
        document.body.parentNode = document.documentElement;
        node1 = document.body.children[0];
        node1.ownerDocument = document;
        node1.parentNode = document.body;
        node2 = document.body.children[1];
        node2.ownerDocument = document;
        node2.parentNode = document.body;

        return fixture;
    }

};

module.exports = fixtures;
