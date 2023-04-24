const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "speedcalc.db"
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE questions (
            questionId INTEGER PRIMARY KEY,
            mathQuestions TEXT
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                db.run('INSERT INTO questions (mathQuestions) VALUES (?)'
                    ["5+4"])
                db.run('INSERT INTO questions (mathQuestions) VALUES (?)'
                    ["2+10"])


            }
            db.run(`CREATE TABLE answers (
            answerId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
            mathAnswers varchar(50)
            )`, (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    db.run('INSERT INTO answers (mathAnswers) VALUES (?)',
                        ["9", "12", "104", "96", "1646", "40", "63", "24", "440", "735"])
                }

                db.run(`CREATE TABLE questionsAnswers (
            QAId INTEGER AUTO_INCREMENT PRIMARY KEY,
            QAQuestionId INT,
            QAAnswerId INT,
            FOREIGN KEY (QAQuestionId) REFERENCES questions(questionId),
            FOREIGN KEY (QAAnswerId) REFERENCES answers (answerId)
            )`, (err) => {
                    if (err) {
                        // Table already created
                    } else {
                        // Table just created, creating some rows
                        db.run('INSERT INTO questionsAnswers (QAQuestionID, QAAnswerId) VALUES (?, ?)',
                            [(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10)])
                    }


                })

            })
        })
    }
})


module.exports = db