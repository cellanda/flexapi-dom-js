/*global require global describe it expect*/
var mapper = require('../../lib/mapper');
var helpers = require('../_helpers');
var Fixture = require('../_fixtures');
var scenarios;


describe('mapper getters', function () {
    var resolved;
    var myMapper;

    beforeEach(function() {
        resolved = 0;
        myMapper = mapper.clone();
    });

    it('evaluates children & attribute', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.children('foo').get.attribute('bar')
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: [
                    'John.Smith',
                    'Samantha.Fox'
                ]
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates children & property', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.children('foo').get.property('innerHTML')
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: [
                    'John Smith',
                    'Samantha Fox'
                ]
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates child & property', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.child('foo').get.property('innerHTML')
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: 'John Smith'
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates child & html', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.child('foo').get.html()
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: 'John Smith'
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates child & html & lowercase', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.child('foo').get.html().get.lowercase()
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: 'john smith'
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates child & html & uppercase', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.child('foo').get.html().get.uppercase()
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: 'JOHN SMITH'
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates child & html & split', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.child('foo').get.html().get.split(' ')(1)
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: 'Smith'
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

    it('evaluates child & html & match', function (done) {
        try {
            var module = {
                content: {
                names: myMapper.property.get.child('foo').get.html().get.match(/o(.*)t/)
            }
            };
            var fixture = Fixture.sampleDomFixture();

            var expectedInstance = {
                names: [
                    'ohn Smit',
                    'hn Smi'
                ]
            };

            resolved = 0;
            myMapper.evaluate(module, fixture.document)
            .then(function (instance) {
                resolved++;
                expect(instance).toCompareTo(expectedInstance);
                resolved++;
            })
            .finally(function () {
                expect('resolved ' + resolved).toBe('resolved 2');
                done();
            });
        }
        catch(ex) {
            expect(ex.toString()).toBe(false);
            done();
        }
    });

});