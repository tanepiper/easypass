const Lab = require('lab');
const Code = require('code');

const easypass = require('./../');

const lab = exports.lab = Lab.script()


lab.experiment('Easypass', () => {

  lab.test('should generate a default password of length 8', done => {

    const pass = easypass.generate();
    Code.expect(pass).to.have.length(8);
    Code.expect(pass).to.be.a.string().and.not.contain('undefined');
    done();
  });

  lab.test('should generate a string password length of 20', done => {

    const pass = easypass.generate(20);
    Code.expect(pass).to.have.length(20);
    Code.expect(pass).to.be.a.string().and.not.contain('undefined');
    done();
  });

  lab.test('should generate a password of length 8 with numbers', done => {

    const pass = easypass.generate(8, true);
    Code.expect(pass).to.have.length(8);
    Code.expect(pass).to.be.a.string().and.not.contain('undefined');
    Code.expect(pass).to.be.a.string().a.match(/\d/);
    done();
  });
});

lab.experiment('Easypass Batch', () => {

  const passwords = [];

  lab.before(done => {
    passwords = easypass.batch(100);
    done();
  });

  lab.test('should generate a good batch of passwords', done => {
    'use strict';
    for (let i = 0; i < passwords.length; i++) {
      Code.expect(passwords[i]).to.have.length(8);
      Code.expect(passwords[i]).to.be.a.string().and.not.contain('undefined');
      Code.expect(passwords[i]).to.be.a.string().a.match(/\d/);
    }
    done();
  });
});
