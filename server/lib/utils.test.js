const utils = require('./utils')
const axios = require('axios');
const sinon = require('sinon')


describe('utils', ()=> {
    describe('function1', () => {
        it('returns 2', () => {
            expect(utils.function1()).toEqual(2)
        })
    })

    describe('func1()', () => {
        it('returns Tyler', () => {
          expect(utils.func1()).toEqual('Tyler')
        })
      })
    
      describe('func2()', () => {
        it('returns 1 on 1', () => {
          expect(utils.func2(1)).toEqual(1)
        })
        it('returns fizz on 2', () => {
          expect(utils.func2(2)).toEqual('fizz')
        })
        it('returns buzz on 3', () => {
          expect(utils.func2(3)).toEqual('buzz')
        })
        it('returns fizz on 4', () => {
          expect(utils.func2(4)).toEqual('fizz')
        })
        it('returns 5 on 5', () => {
          expect(utils.func2(5)).toEqual(5)
        })
        it('returns fizzbuzz on 12', () => {
          expect(utils.func2(12)).toEqual('fizzbuzz')
        })
        it('returns tyler on 77', () => {
          expect(utils.func2(77)).toEqual('tyler')
        })
        it('throws an error on 18', () => {
          expect(utils.func2(18)).toThrow()
        })
      })

      describe('getInternetData', () => {
          it('returns an array of people', () => {
            sinon.stub(axios, 'get').returns(Promise.resolve({
                data: {
                    results: [1,2,3,4,5,6,7,8,9,10]
                }
            }))
            return utils.getInternetData().then(people => {
                expect(people.length).toEqual(10)
            })
          })
      })
})

