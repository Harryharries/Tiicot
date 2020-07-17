// const expect = require('chai').expect;
// const request = require('supertest');

// const app = require('../server/index.js');
// //During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

const assert = require('assert');
describe('genernal test', () => {
 it('should return 5', () => {

        
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});

// describe('API Test', ()=>{
//     it('genernal program works!',()=>{
//         request(app).get('/student').then((res) => {
//             const body = res.data;
//             expect(body.length).to.equal(7);
//         })
//     })
// });