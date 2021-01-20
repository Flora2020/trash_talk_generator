const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./generateTrashTalk')
const app = express()


const occupations = [
  {
    'en': 'engineer',
    'ch': '工程師',
    'avatar': 'https://drive.google.com/uc?export=view&id=11Pe3gxi2PK3X6jIUNWw0qwHjf0STJ0qd'
  },
  {
    'en': 'designer',
    'ch': '設計師',
    'avatar': 'https://drive.google.com/uc?export=view&id=1h8v38rAtmz_fzNDMoPGonYxlypoLoSKb'
  },
  {
    'en': 'entrepreneur',
    'ch': '創業家',
    'avatar': 'https://drive.google.com/uc?export=view&id=1jEqDZX7bMVc7y_HZ9G4dJ5O4AMRdJPfM'
  }
]

const port = 3000

app.use(express.static('public'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { occupations })
})

app.post('/', (req, res) => {
  const checkedItem = req.body.occupation
  const occupation = occupations.find(job => {
    return job.en === checkedItem
  })
  const trashTalk = generateTrashTalk(occupation)
  res.render('index', { occupations, trashTalk, checkedItem })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})