# Week 08 - Sequelise ORM

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

**Overview:**

Create a Sequelize application that connects to a Clever Cloud database

### Requirements:
 - [ ] Create both a Books and an Author model and the following routes/controllers.
 - [ ] Use design docs for endpoints/data formatting.
 - [ ] Test all routes with Thunder Client
 - [x] Create an association between Books and Author, where:
   - [x] Author has many Book
   - [x] Book belongs to Author
 
 **Book Routes**
 - [ ] POST - adds a book to the DB
 - [ ] GET - gets all books
 - [ ] GET - gets a book by author
 - [ ] PATCH - dynamically updates a book on title
 - [ ] DELETE - deletes a single book by title
 - [ ] DELETE - deletes all books
 
 **Author Routes**
 - [ ] POST - adds an author to the DB
 - [ ] GET - gets a single author by author name and retrieves associated books

### Stretch Goals:
 - [ ] Create two Genre routes given in the design docs.
 - [x] Create an association between Books and Author, where:
   - [x] Author has many Book
   - [x] Book belongs to Author

 **Genre Routes**
 - [ ] POST - adds an author to the DB
 - [ ] GET - gets a single author by author name and retrieves associated books

**Personal Stretch Goals:**

 - [ ] Add primary keys to the tables.
 - [ ] Implement the CQRS pattern, splitting read and write operations.

## Implementation

With this project, I wanted to focus on implementing a solution, directly to the given specs for each of the routes. This has still allowed me to use my own initiative so far as project architecture is concerned; but, there are a lot of design choices that I would not personally choose; mainly naming conventions, and response payloads. But, this a part of the discipline that is needed, when working with existing infrastructure.

## Retrospective

TODO: Write Retroscpective