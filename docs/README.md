# Week 08 - Sequelise ORM

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

**Overview:**

Create a Sequelize application that connects to a Clever Cloud database

### Requirements:
 - [x] Create both a Books and an Author model and the following routes/controllers.
 - [x] Use design docs for endpoints/data formatting.
 - [x] Test all routes with Thunder Client
 - [x] Create an association between Books and Author, where:
   - [x] Author has many Book
   - [x] Book belongs to Author
 
 **Book Routes**
 - [x] POST - adds a book to the DB
 - [x] GET - gets all books
 - [x] GET - gets a book by title
 - [x] PUT - dynamically updates a book on title
 - [x] DELETE - deletes a single book by title
 - [x] DELETE - deletes all books
 
 **Author Routes**
 - [x] POST - adds an author to the DB
 - [x] GET - gets a single author by author name and retrieves associated books

### Stretch Goals:
 - [x] Create an association between Books and Author, where:
   - [x] Author has many Book
   - [x] Book belongs to Author

 **Genre Routes**
 - [x] Create two Genre routes given in the design docs.
   - [x] POST - adds an genre to the DB
   - [x] GET - gets a single genre by genre name, and retrieves associated books

**Personal Stretch Goals:**

 - [x] Implement the CQRS pattern, splitting read and write operations.
 - [ ] Create React front-end to interact with the DB.
 - [ ] Use Tailwind CSS to style the React front-end.
 - [ ] Produce a Database Analysis Report and Roadmap.

## Implementation

With this project, I wanted to focus on implementing a solution, directly to the given specs for each of the routes. This has still allowed me to use my own initiative so far as project architecture is concerned; but, there are a lot of design choices that I would not personally choose; mainly naming conventions, and response payloads. But, this a part of the discipline that is needed, when working with existing infrastructure.

## Retrospective

It is understood that, for purposes of education, and demonstating the use of specific syllabus requirements, this project is a contrived example of a real-world API and database. That being said, I did want to expand on some areas of the project that took my interest.  

### PUT/PATCH Equivocation

Within the design specs for this project, it specifies that a PUT request should be used for the updating of a book. However, there is an important distinction to be made, between the PUT and PATCH HTTP verbs, that means that means that this API is not being implemented properly, as written. The distinction between the two is thus:

A PUT command should be used to update one or more records within a database, by completely replacing the record, with new information in each field, even if that information is the same as it was previously. The PUT verb denotes that request object **must** contain a fully-formed, valid record that will be used to overwrite the record that is currently within the database. The PUT verb *specifically disallows* partial record updates.

This is as opposed to the PATCH command, that *specifically allows* partial record updates. While a PATCH request body can contain the same fully-formed data as a PUT request, a PUT request **must not** perform partial updates. The PATCH request would usually contain a dictionary of fields, with updated values, for a single record, it can also be used to update values on multiple records, with a filter given within the body. Within this project, the request is made as a dynamic update, for a single field.