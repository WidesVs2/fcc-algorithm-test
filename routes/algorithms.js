const express = require('express')
const router = express.Router()
const Functions = require('./routeFunctions')


const Algorithm = require('../models/Algorithm')
const Func = new Functions(10000)

router.get('/', async (req, res) => {
    Func.increment()
    try {
        const algorithms = await Algorithm.find()
        if (!algorithms) {
            console.error('No Algorithms Found!')
            res.status(400).json({
                error: 'Bad Request, Algorithm Not Found'
            })
        } else {
            let algoArray = Func.formatData(algorithms, 'GET /api/v1/algorithms', 'Algorithms Retrieved')
            res.status(200).json(algoArray)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server Error', error: err })
    }
})
      .get('/:id', async (req, res) => {
          Func.increment()
          try {
              const algorithm = await Algorithm.find({_id: req.params.id})
              if (!algorithm) {
                  console.error('Algorithm not Found!')
                  res.status(400).json({error: 'Bad Request, Algorithm Not Found!'})
              } else {
                  res.status(200).json(Func.formatSingleData(algorithm, 'GET /api/v1/algorithms/:id', 'Algorithm Retrieved!'))
              }
          } catch (err) {
              console.error(err)
              res.status(500).json({ msg: 'Server Error', error: err })
          }
      })
      .post('/', async (req, res) => {
        Func.increment()
        const name = req.body.name 
        const desc = req.body.desc
        const url = req.body.url 
        const title  = req.body.title
          try { 
            let newAlgo = new Algorithm({
                name,
                desc,
                url,
                title
            })
            const algorithm = await newAlgo.save()
            
            res.status(200).json(Func.formatSingleData(algorithm, 'POST /api/v1/algorithms', 'Algorithm Created!'))
          } catch (err) {
              console.error(err)
              res.status(500).json({ msg: 'Server Error', error: err })
          }
      })
      .put('/:id', async (req, res) => {
          Func.increment()
          const { name, desc, url, title } = req.body
          try {
              const test = await Algorithm.find({_id: req.params.id})
              if (!test) {
                  console.error('Algorithm Not Found!')
                  res.status(400).json({error: 'Bad Request, Algorithm Not Found!'})
              } else {
                  try {
                      const result = await Algorithm.updateOne({_id: req.params.id}, {
                          fName,
                          arg1,
                          arg2,
                          expectedResult,
                          updated_at: Date.now()
                      })
                      res.status(200).json(Func.formatSingleData(result, 'PUT /api/v1/algorithms/:id', 'Algorithm Updated!'))  
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
              const algorithm = await Algorithm.find({_id: req.params.id})
              if (!algorithm) {
                  console.error('Algorithm not Found!')
                  res.status(400).json({error: 'Bad Request, Algorithm Not Found!'})
              } else {
                  try {
                      const result = await Algorithm.deleteOne({_id: req.params.id})
                      res.status(200).json(Func.formatSingleData(result, 'DELETE /api/v1/algorithms/:id', 'Algorithm Deleted'))
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