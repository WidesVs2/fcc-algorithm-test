const express = require('express')
const router = express.Router()
const Functions = require('./routeFunctions')


const Test = require('../models/Test')
const Func = new Functions(10000)

router.get('/', async (req, res) => {
    Func.increment()
    try {
        const tests = await Test.find()
        if (!tests) {
            console.error('No Tests Found!')
            res.status(400).json({
                error: 'Bad Request, Test Not Found'
            })
        } else {
            let testArray = Func.formatData(tests, 'GET /api/v1/tests', 'Tests Retrieved')
            res.status(200).json(testArray)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error', error: err })
    }
})
      .get('/:id', async (req, res) => {
          Func.increment()
          try {
              const test = await Test.find({_id: req.params.id})
              if (!test) {
                  console.error('Test not Found!')
                  res.status(400).json({error: 'Bad Request, Test Not Found!'})
              } else {
                  res.status(200).json(Func.formatSingleData(test, 'GET /api/v1/tests/:id', 'Test Retrieved!'))
              }
          } catch (err) {
              console.error(err)
              res.status(500).json({ msg: 'Server Error', error: err })
          }
      })
      .post('/', async (req, res) => {
        Func.increment()
        const fName = req.body.fName 
        const arg1 = req.body.arg1
        const arg2 = req.body.arg2 
        const expectedResult  = req.body.expectedResult
          try { 
            let newTest = new Test({
                fName,
                arg1,
                arg2,
                expectedResult
            })
            const test = await newTest.save()
            
            res.status(200).json(Func.formatSingleData(test, 'POST /api/v1/tests', 'Test Created!'))
          } catch (err) {
              console.error(err)
              res.status(500).json({ msg: 'Server Error', error: err })
          }
      })
      .put('/:id', async (req, res) => {
          Func.increment()
          const { fName, arg1, arg2, expectedResult } = req.body
          try {
              const test = await Test.find({_id: req.params.id})
              if (!test) {
                  console.error('Test Not Found!')
                  res.status(400).json({error: 'Bad Request, Test Not Found!'})
              } else {
                  try {
                      const result = await Test.updateOne({_id: req.params.id}, {
                          fName,
                          arg1,
                          arg2,
                          expectedResult,
                          updated_at: Date.now()
                      })
                      res.status(200).json(Func.formatSingleData(result, 'PUT /api/v1/tests/:id', 'Test Updated!'))  
                  } catch (err) {
                      console.error(err)
                      res.status(500).json({msg: 'Server Error', error: err})
                  }
              }
          } catch (err) {
              console.error(err)
              res.status(500).json({msg: 'Server Error', error: err})
          }
      })
      .delete('/:id', async (req, res) => {
          Func.increment()
          try {
              const test = await Test.find({_id: req.params.id})
              if (!test) {
                  console.error('Test not Found!')
                  res.status(400).json({error: 'Bad Request, Test Not Found!'})
              } else {
                  try {
                      const result = await Test.deleteOne({_id: req.params.id})
                      res.status(200).json(Func.formatSingleData(result, 'DELETE /api/v1/tests/:id', 'Test Deleted'))
                  } catch (err) {
                      console.log(err)
                      res.status(500).json({msg: 'Server Error', error: err})
                  }
              }
          } catch (err) {
              console.error(err)
              res.status(500).json({msg: 'Server Error', error: err})
          }
      })

module.exports = router