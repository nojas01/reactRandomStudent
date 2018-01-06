*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

*Information on how to perform common tasks you'll find [here](https://github.com/facebookincubator/create-react-app/blob/master*/packages/react-scripts/template/README.md).*

# ReactRandomStudent

## Introduction

*This was the final assignment for the [Codaisseur Academy](https://www.codaisseur.com/). Starting on a tuesday afternoon with the deadline that friday. This is the front-end ReactJS part of the assignment. The ExpressJS API also made as part of the assignment you'll find in this [here](https://github.com/nojas01/apiRandomStudent)*


*Part of the assignment is making smart choices about where to start, how to prioritize tasks, time managment etc. Nobody finishes everything so the question then becomes in order to make tis an MVP what are the most important tasks and focus on finishing those before spending time on side 'quests'*


## Assignment

### Introduction
You might not have noticed that, but we have been monitoring your performance on a
daily basis. After every class day, we assign each student in the class a colour code,
based on their performance as we see it. These colour codes are: GREEN, YELLOW, and
RED. GREEN meaning all good and on track, YELLOW meaning slightly off-track, and
RED meaning needs extra attention.
Currently, we collect these evaluations in a spreadsheet. (yuck!) The spreadsheet has
the following columns:
```bash
• Picture - A photo of the student
• Name - The full name of the student
• Day - Column for each day containing the colour code and optionally some remarks
```
We agreed between teachers that if a students is marked YELLOW or RED, we have to fill
in a remark as well. For GREEN students, we are allowed to omit the remark.
Next you will find User Stories to help you build a web app to help us do this without a
spreadsheet. Read them carefully.

### User Stories
```bash
• As a Teacher I can sign into the tool with my email and password to start using it
• As a Teacher, after I signed in, I see a (list of) current classes, identifiable by their
Batch number (e.g. Batch #1), start date, and end date.
• As a Teacher, I can create a new class by giving it a Batch number, start date, and
end date.
• As a Teacher I can add, edit, remove students in a class. To add a student I need to
provide: 1) their full name, 2) (a link to) their profile picture.
• As a Teacher, I can click on a class, after which I see a grid of all the students by their
name and photo, and the last colour code given to them. Above the students grid, I
see a bar with 1-3 segments, showing me the percentage (%) of students evaluated
GREEN, YELLOW, and RED.
• As a Teacher, when I click on a photo or name, I can click on GREEN, YELLOW, or RED, fill
in the date (defaults to today), and a remark. When I click “Save” it saves my
evaluation, and takes me back to the student overview, when I click “Save and Next” it
saves and shows me the next student.
• As a Teacher, when I look at a student’s page, I can only fill in one evaluation per
student per day. I can edit my own evaluations.
• ALGORITHM PART! As a Teacher, from the class view I can click a button “ASK A
QUESTION”. It shows me the name and picture of a random student to ask a
question. Not entirely random though: RED students get ~50% of the questions
YELLOW students ~33%, and GREEN students ~17%.
```
### Bonus Stories
*(should you feel bored..)*
```bash
• As a Teacher during evaluation I have to fill in a Remark if I filled in YELLOW or RED.
• As a Teacher I can filter in the class overview on GREEN, YELLOW, or RED
• As a Teacher I can filter on students without evaluations for today or a specific date.
• As a Teacher I can indicate whether a student answered a question correctly or not,
by giving them a colour GREEN, YELLOW, or RED.
• For the bold: As a Teacher I can run this app as an app on my phone ;)
```
